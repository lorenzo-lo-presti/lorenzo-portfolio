#!/usr/bin/env python3
import argparse, json, shutil, pathlib, sys

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--source', required=True, help='Percorso repo privato')
    p.add_argument('--manifest', default='export_manifest.json')
    args = p.parse_args()

    src_root = pathlib.Path(args.source).resolve()
    pub_root = pathlib.Path('.').resolve()

    if not src_root.exists():
        print('[ERRORE] sorgente non trovato', file=sys.stderr); sys.exit(1)

    data = json.loads((pub_root/args.manifest).read_text(encoding='utf-8'))
    files = data.get('files', []); copy_map = data.get('copy_map', {})

    def copy_rel(srel, drel=None):
        s = src_root / srel
        if not s.exists():
            print('[WARN] manca', srel); return
        target = drel if drel else srel
        d = pub_root / target
        d.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(s, d)
        print('[OK]', srel, '->', target)

    for f in files: copy_rel(f)
    for srel, drel in copy_map.items(): copy_rel(srel, drel)

if __name__ == '__main__':
    main()
