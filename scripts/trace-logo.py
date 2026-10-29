"""Trace the approved raster into fixed SVG contours; no font substitution."""
from pathlib import Path
from PIL import Image
from collections import defaultdict, deque

root = Path(__file__).resolve().parent.parent
im = Image.open(root / 'public/brand/logo-horizontal-dark.png').convert('RGB')
w, h = im.size
pixels = im.load()
white, blue = set(), set()
for y in range(h):
    for x in range(w):
        r, g, b = pixels[x, y]
        if min(r, g, b) > 140:
            white.add((x, y))
        elif b > 105 and g > 65 and b > r * 1.5:
            blue.add((x, y))

# Keep the black pupils opaque; letter counters stay transparent.
occupied = white | blue
outside = set()
queue = deque([(0, 0)])
while queue:
    p = queue.popleft()
    if p in outside or p in occupied:
        continue
    x, y = p
    if not (0 <= x < 850 and 0 <= y < h):
        continue
    outside.add(p)
    queue.extend(((x-1,y),(x+1,y),(x,y-1),(x,y+1)))
black = {(x,y) for y in range(h) for x in range(850) if (x,y) not in occupied and (x,y) not in outside}

def contours(mask):
    edges = defaultdict(list)
    for x,y in mask:
        if (x,y-1) not in mask: edges[(x,y)].append((x+1,y))
        if (x+1,y) not in mask: edges[(x+1,y)].append((x+1,y+1))
        if (x,y+1) not in mask: edges[(x+1,y+1)].append((x,y+1))
        if (x-1,y) not in mask: edges[(x,y+1)].append((x,y))
    paths=[]
    while edges:
        start=next(iter(edges)); p=start; points=[]
        while True:
            points.append(p)
            following=edges[p].pop()
            if not edges[p]: del edges[p]
            p=following
            if p==start: break
        if len(points)<12: continue
        simple=[]
        for i,p in enumerate(points):
            a=points[i-1]; b=points[(i+1)%len(points)]
            if (p[0]-a[0])*(b[1]-p[1]) != (p[1]-a[1])*(b[0]-p[0]): simple.append(p)
        if simple:
            paths.append('M'+' '.join(f'{x},{y}' for x,y in simple)+'Z')
    return ''.join(paths)

all_pixels = occupied | black
xmin=min(x for x,y in all_pixels)-8; xmax=max(x for x,y in all_pixels)+9
ymin=min(y for x,y in all_pixels)-8; ymax=max(y for x,y in all_pixels)+9
parts=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{xmax-xmin}" height="{ymax-ymin}" viewBox="{xmin} {ymin} {xmax-xmin} {ymax-ymin}" role="img" aria-labelledby="title"><title id="title">Look Code Tecnologia</title>']
for color,mask in [('#080812',black),('#ffffff',white),('#32b4f8',blue)]:
    parts.append(f'<path fill="{color}" fill-rule="evenodd" d="{contours(mask)}"/>')
parts.append('</svg>')
(root / 'public/brand/logo-horizontal.svg').write_text('\n'.join(parts))
print(f'Traced original contours: {xmax-xmin} x {ymax-ymin}; no fonts or background.')
