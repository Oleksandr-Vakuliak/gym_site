# AI image prompts

Prompts for generating the site's photos so that every section looks like **the same gym** as the interior block (`src/assets/interior-gym.jpg`, Pexels 17211446).
Written in English: image models follow English prompts more precisely.

## How to use

1. Generate everything in **one ChatGPT chat**. Start it by uploading the interior photo (`assets/originals/interior/pexels-eyecon-design-17211446.jpg`) and the hero photo, with the message:
   > This is the gym our website is about. Every image I ask for next must look like it was taken in this same gym, in the same style. Do not add any text, logos or watermarks.
2. For each image send **GYM + STYLE (unchanged) + one SCENE**. Change only the SCENE.
3. One image per message. If the result drifts, reply «closer to the reference photo».
4. ChatGPT outputs about 1536 px wide. Upscale to the size in the table with **Upscayl** (free, open source) before handing it over.
5. Put results in `assets/originals/<section>/` and record them in `docs/media-credits.md` as AI-generated (tool + date).

Aspect ratios for sections that are not laid out yet are provisional; they are confirmed when the section is built.

## Shared blocks

**GYM** (what the place looks like):
```
GYM: A modern urban gym in a converted building. Dark ceiling with exposed
beams and black acoustic panels, rows of small warm recessed spotlights,
subtle LED strip light along beams. Black rubber floor with thin white
painted floor markings and track lanes. Dark stone and dark concrete wall
panels, large glass partitions, a green plant wall in places, deep maroon
accent wall. Matte black equipment with chrome details, neatly arranged.
```

**STYLE** (how it is shot):
```
STYLE: Photorealistic photo, 24-35mm lens, eye level, natural perspective.
Low-key lighting, warm spotlights, soft shadows, slight haze. Muted colours,
graphite and warm grey dominate, small warm amber highlights. Clean and tidy,
calm, welcoming mood, not aggressive. No text, no logos, no brand names,
no watermarks, no posters with words.
```

**PEOPLE** (add only to scenes with people):
```
PEOPLE: Ordinary fit people of different ages and body types, 20 to 50 years
old, not bodybuilders or fitness models. Relaxed, focused, friendly faces,
natural poses, correct exercise technique. Plain dark or muted sportswear
without logos. Hands and faces anatomically correct.
```

## Prompts by section

| # | Section | Images | Ratio | Min. width after upscale |
|---|---------|--------|-------|--------------------------|
| 4 | Sectors map A–G | 7 (one per sector) | 4:3 | 1600 px |
| 6 | Services | 3 (video posters / video start frames) | 16:9 | 1920 px |
| 8 | Coaches | 4 | 4:5 | 1200 px |
| 9 | Events | 1 wide + 2–3 small | 21:9 and 3:2 | 2500 / 1200 px |
| 10 | Protein bar | 1 | 4:5 | 1200 px |
| 11 | Gallery | 9–12 | mix of 3:2 and 2:3 | 1600 px |
| — | News articles | 1 per article | 16:9 | 1600 px |

The sectors map itself and the contacts map are SVG illustrations drawn in code, no prompts needed.

### 4 · Sectors map (click a sector → photo)

Every scene: `Horizontal 4:3 image, empty zone, no people.`

- **A · Free weights**: `SCENE: The free weights zone: long dumbbell rack along a dark stone wall, a flat bench and two power racks with loaded barbells, rubber lifting platform with white floor markings.`
- **B · Machines**: `SCENE: The machines zone: a neat row of matte black selectorised strength machines (chest press, leg press, lat pulldown) under warm spotlights, clear walkway between them.`
- **C · Cardio**: `SCENE: The cardio zone: a row of treadmills, bikes and rowing machines facing a large glass wall, evening city lights outside, screens switched off.`
- **D · Functional**: `SCENE: The functional zone: open floor with kettlebells in a row, battle ropes, wooden plyo boxes, suspension straps hanging from a rig, white lane markings on the floor.`
- **E · Studio**: `SCENE: The group studio behind a glass partition: exercise mats laid out in neat rows, foam rollers and small dumbbells, softer warm light, mirror wall.`
- **F · Protein bar**: `SCENE: A small bar counter near the exit of the gym floor: dark stone counter, shaker bottles, a blender, fruit in a bowl, two bar stools, warm pendant lamps.`
- **G · Balcony**: `SCENE: A mezzanine balcony above the gym floor with a black metal railing, lounge chairs and a small DJ table with turntables, view down onto the gym below.`

### 6 · Services (3 blocks with video)

ChatGPT makes only stills. Use each image as a **poster** for the video block, or as the **start frame** in an image-to-video tool (e.g. Kling, Runway, Sora): upload the image and describe the motion in one sentence, 5–8 seconds, slow camera.

Every scene: `Horizontal 16:9 image, subject in the right half, calmer darker area on the left for text.` + PEOPLE

- **Gym floor**: `SCENE: A woman in her 30s doing dumbbell rows on a bench in the free weights zone, calm and focused, another person training in the soft-focus background.`
  Motion: `She completes two slow controlled reps, camera slowly pushes in.`
- **Personal training**: `SCENE: A coach standing next to a beginner man in his 40s at a cable machine, the coach gently correcting his elbow position, both smiling slightly.`
  Motion: `The coach adjusts his arm, the man repeats the movement, camera slowly moves sideways.`
- **Group classes**: `SCENE: A small group of 5 people of different ages doing a squat exercise on mats in the glass-walled studio, instructor in front facing them.`
  Motion: `The group moves together in rhythm, camera slowly pulls back.`

### 8 · Coaches (4 portraits)

Generate all four **in a row** in the same chat so the background and light stay identical.

Every scene: `Vertical 4:5 portrait, waist-up, looking at the camera with a calm friendly half-smile, arms relaxed or crossed, same background for all coaches: blurred free weights zone with warm spotlights. Plain black t-shirt without logos.` + PEOPLE

- **Andrii Koval (strength)**: `SCENE: Man around 35, athletic but not bulky, short dark hair, short beard.`
- **Marta Hnatiuk (functional, groups)**: `SCENE: Woman around 30, energetic, hair in a ponytail.`
- **Ostap Melnyk (beginners, personal)**: `SCENE: Man around 28, lean, approachable, short light-brown hair, clean-shaven.`
- **Solomiia Boiko (stretching, mobility)**: `SCENE: Woman around 38, slim and graceful, dark hair in a low bun.`

### 9 · Events

- **Wide block**: `SCENE: Evening event in the gym: a DJ playing on the mezzanine balcony above the gym floor, below people are training and chatting in small groups, warm amber and a few deep red lights, light haze in the air. Friendly, open atmosphere, not a nightclub. Horizontal 21:9, DJ in the upper centre, darker lower-left corner.` + PEOPLE
- **Small cards (2–3)**: `SCENE: Close shot from the same evening event: [two friends high-fiving after a set / DJ hands on the turntables from a low angle / people laughing near the protein bar]. Horizontal 3:2.` + PEOPLE

### 10 · Protein bar

`SCENE: Close-up of the protein bar counter: two protein shakes in clear cups (chocolate and strawberry), a banana, a shaker bottle, dark stone counter top, warm pendant lamp above, gym floor softly blurred behind. Vertical 4:5, no people.`

### 11 · Gallery

Mix of wide and close shots; every scene ends with `Horizontal 3:2` or `Vertical 2:3` (alternate). Use PEOPLE only where there are people. Keep heads fully in frame: the gallery must never crop people.

- `SCENE: Chalked hands gripping a barbell, close-up.`
- `SCENE: Row of kettlebells in order of weight on the rubber floor.`
- `SCENE: A woman stretching on a mat in the studio, full body in frame.`
- `SCENE: Two people spotting each other on the bench press, full bodies in frame.`
- `SCENE: Empty gym early in the morning, first light through the glass wall.`
- `SCENE: Close-up of the white floor markings and lane numbers on the rubber floor.`
- `SCENE: A man on the rowing machine mid-stroke, side view, full body in frame.`
- `SCENE: Coach explaining an exercise to a small group, all people fully in frame.`
- `SCENE: Towels and water bottles on a bench after a workout.`

### News articles (cover images)

`SCENE: [topic of the article, e.g. «new kettlebell class», «how to prepare for your first workout»] shown in the same gym, one clear subject, lots of calm space. Horizontal 16:9.` + PEOPLE if needed.
