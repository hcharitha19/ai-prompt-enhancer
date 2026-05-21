import random

styles = {
    "fantasy": [
        "magical atmosphere",
        "mysterious environment",
        "epic fantasy world",
        "ancient mystical setting"
    ],

    "cyberpunk": [
        "neon cyberpunk city",
        "futuristic environment",
        "high-tech atmosphere",
        "glowing neon lights"
    ],

    "realistic": [
        "ultra realistic environment",
        "professional photography",
        "natural realistic textures",
        "high detail realism"
    ],

    "portrait": [
        "cinematic portrait style",
        "detailed facial features",
        "studio quality portrait",
        "sharp focus photography"
    ],

    "landscape": [
        "beautiful natural scenery",
        "dramatic sky",
        "wide cinematic landscape",
        "highly detailed environment"
    ]
}

lightings = [
    "golden lighting",
    "volumetric lighting",
    "soft cinematic lighting",
    "dramatic shadows",
    "sunset glow"
]

camera_angles = [
    "wide angle shot",
    "close up shot",
    "low angle perspective",
    "cinematic composition",
    "professional DSLR framing"
]

moods = [
    "mysterious mood",
    "epic atmosphere",
    "dreamlike visuals",
    "dark fantasy tone",
    "vibrant futuristic energy"
]

reasonings = [
    "Added cinematic lighting and composition to improve visual storytelling.",
    "Enhanced textures and atmosphere for a more professional AI-generated look.",
    "Used dramatic camera angles and lighting to create depth and realism.",
    "Improved mood and environment details for better image generation quality.",
    "Added high-detail artistic elements to create a visually rich prompt."
]


def generate_prompt(user_input, style):

    style_detail = random.choice(styles[style])

    lighting = random.choice(lightings)

    camera = random.choice(camera_angles)

    mood = random.choice(moods)

    reasoning = f"""
Added {lighting}, {camera}, and {mood}
to create a visually rich and cinematic AI image prompt.
"""

    prompt = f"""
A cinematic depiction of {user_input},
featuring {style_detail},
with {lighting},
captured in a {camera},
creating a {mood},
The scene includes ultra realistic textures,
highly detailed environment elements,
professional color grading,
depth of field effects,
cinematic shadows,
sharp focus,
8k ultra HD quality,
professional digital art style,
highly immersive composition,
concept art quality rendering.
"""

    return {
        "prompt": prompt,
        "reasoning": reasoning
    }