# Coffee Personality Quiz — Requirements

## Personality → Coffee Pairings

| Personality | Coffee | Tagline | Image |
|-------------|--------|---------|-------|
| Bold Adventurer | Double Espresso | "You live for intensity" | public/bold-adventurer.jpg |
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" | public/sweet-enthusiast.jpg |
| Night Owl | Red Eye (coffee + espresso shot) | "Sleep is optional" | public/night-owl.jpg |
| Health Nut | Oat Milk Americano | "Wellness in every sip" | public/health-nut.jpg |
| Artisan Snob | Pour-Over, Single Origin | "You know what you like" | public/artisan-snob.jpg |

## Result Display

**Single recommendation** — show the top personality and its coffee only.
Example: "You're a Bold Adventurer! Your coffee: Double Espresso."

## Visual Style

**Primary: Style 4 — Warm & Cozy**
- Earth tones (creams, browns, burnt orange)
- Serif font (Lora) for headings, sans-serif (DM Sans) for body
- Soft gradients, rounded cards, inviting feel
- Very on-brand for Basecamp Coffee

**Secondary inspiration: Style 1 — Playful & Colorful**
- Can borrow energy/fun from Style 1 where appropriate

## Images

Yes — one photo per result, downloaded to `public/`:
- `public/bold-adventurer.jpg` — espresso shot close-up
- `public/sweet-enthusiast.jpg` — caramel latte with drizzle
- `public/night-owl.jpg` — dark, moody coffee
- `public/health-nut.jpg` — oat milk coffee
- `public/artisan-snob.jpg` — pour-over brewing

## Icons

Yes — emoji icons next to each answer option.

## Quiz Questions

### Q1 — Lifestyle
**Your ideal Saturday morning looks like...**
- 🏔️ Up at 5am for a trail run → **Bold Adventurer**
- ☕ Brunch with friends at a cute café → **Sweet Enthusiast**
- 😴 Sleeping in until noon, no regrets → **Night Owl**
- 🧘 Yoga, then a green smoothie → **Health Nut**
- 🛍️ Farmers market, then testing a new brew method → **Artisan Snob**

### Q2 — Pop Culture
**Which Netflix genre are you actually watching?**
- 💥 High-stakes action thriller → **Bold Adventurer**
- 💕 A feel-good rom-com → **Sweet Enthusiast**
- 🔪 True crime at 2am → **Night Owl**
- 🌿 Nature documentary → **Health Nut**
- 🎬 Niche indie film nobody's heard of → **Artisan Snob**

### Q3 — Abstract
**Pick a color that speaks to you:**
- ❤️ Deep red → **Bold Adventurer**
- 🌸 Pastel pink → **Sweet Enthusiast**
- 🌙 Midnight blue → **Night Owl**
- 🌲 Forest green → **Health Nut**
- 🟠 Burnt orange → **Artisan Snob**

### Q4 — Lifestyle
**How would your coworkers describe you?**
- ⚡ Always pushing, sets big goals → **Bold Adventurer**
- 🎉 Team player who brings the snacks → **Sweet Enthusiast**
- 🦉 Quieter in the morning, unstoppable by afternoon → **Night Owl**
- 📋 Steady, disciplined, never misses a deadline → **Health Nut**
- 🔍 Meticulous — details matter → **Artisan Snob**

### Q5 — Pop Culture
**Which character vibes with you most?**
- 🧱 Dwight Schrute → **Bold Adventurer**
- 💅 Kelly Kapoor → **Sweet Enthusiast**
- 😎 Ryan Howard → **Night Owl**
- 🤸 Jim Halpert → **Health Nut**
- 🕶️ Oscar Martinez → **Artisan Snob**

### Q6 — Quirky
**Stranded on a desert island — what do you bring?**
- 🪓 Full survival gear → **Bold Adventurer**
- 🍬 A bag of candy and snacks → **Sweet Enthusiast**
- 🎵 A playlist that goes all night → **Night Owl**
- 🧘 A fitness mat and resistance bands → **Health Nut**
- ⚙️ A hand grinder and single-origin beans → **Artisan Snob**

## Scoring Logic

Each answer maps to one personality. After 6 questions, tally which personality was chosen most. Display that personality and its coffee recommendation as the result.

In case of a tie: display the personality that appears first in the tie.
