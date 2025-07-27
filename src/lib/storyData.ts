// src/lib/storyData.ts
// Story scenes for the interactive narrative, using correct image paths and TypeScript
export interface StoryScene {
  id: number;
  title: string;
  imageSrc: string;
  storyText: string;
}

export const storyScenes: StoryScene[] = [
  {
    id: 1,
    title: 'Exposition – Arrival at the Estate',
    imageSrc: '/Arrival/A foggy night drive toward a looming gated estate, with the visual style of seed, featuring atmospheric lighting and a sense of mystery.png',
    storyText: `Aditya Verma, a landscape architect from the city, receives an unusual contract — to restore the gardens of an old estate inherited by a mysterious absentee owner. The estate, known locally as Rasa Manor, sits at the outskirts of a forgotten town, its name erased from most maps. The assignment is generous in payment but comes with one condition: he must stay on the premises for the duration.\n\nThe caretaker, an aging man with cloudy eyes and a voice like dried leaves, leaves only one warning: “Never step on the chessboard after midnight.”\n\nTheme: Curiosity and ambition draw people into dark places masked as opportunity.`
  },
  {
    id: 2,
    title: 'Rising Tension – The Garden’s Rules',
    imageSrc: '/Rising/A wide shot of the garden with each lamppost emitting faint, shifting shadows, rendered in the visual style of seed, highlighting the eerie atmosphere and distorted light.png',
    storyText: `Each day, Aditya documents the garden’s strange layout: winding paths that change subtly overnight, statues that seem... slightly different in position every morning, and the chessboard pattern in the lawn that feels cold beneath his feet.\n\nHis nights are worse. Whispers ride the wind. Once, he sees the tall lamppost flicker like a heartbeat. One night, he hears soft footsteps along the stone path, though no one should be there. The gazebos seem... occupied when they shouldn't be. Furniture inside shifts. Candles light themselves.\n\nAnd every evening, the statues seem closer.\n\nConflict: Aditya begins to question his sanity as the garden alters reality around him. Something is manipulating time and space — or his mind.`
  },
  {
    id: 3,
    title: 'Climax – The Midnight Move',
    imageSrc: "/Climax/The lamppost's light forming a perfect square of bright intensity with swirling darkness around, maintaining the visual style of seed, emphasizing the stark contrast and ominous atmosphere.png",
    storyText: `Curiosity wins. At exactly midnight, Aditya steps onto the chessboard.\n\nThe garden shifts. The light from the tall lamppost expands unnaturally, revealing grotesque forms in the darkness — not statues, but frozen people, their faces twisted in agony. The path beneath him now leads not to the gazebo, but to the center of the chessboard where a large, black knight piece — now life-sized — waits.\n\nA voice booms from nowhere and everywhere: “White to move.”\n\nThe garden becomes the board. Aditya is now a pawn.\n\nHe realizes: this estate is a curse — an eternal game played by something that feeds on decisions, fear, and sacrifice. Every new arrival is a new piece. And once moved, they can never leave.\n\nConflict & Theme: Free will vs. manipulation. The illusion of control. The price of crossing thresholds uninvited.`
  },
  {
    id: 4,
    title: 'Falling Action – The Pieces in Place',
    imageSrc: "/Falling/A twisted, cracked statue bearing Aditya’s likeness partially forming near the path, maintaining the visual style of seed, emphasizing the eerie transformation and decaying texture.png",
    storyText: `Aditya tries to escape, running from path to path, but finds each route looping back to the center. The garden changes with each attempt, more wild, less manicured — revealing ancient roots and stone faces watching him.\n\nHe finds old journals in the gazebo: from past victims — a botanist, a journalist, a sculptor. Each of them left cryptic diagrams of the board and notes on forbidden moves.\n\nHe’s not the first. He won’t be the last.`
  },
  {
    id: 5,
    title: 'Resolution – Checkmate or Repetition',
    imageSrc: '/Resolution/Wide shot of the garden at dawn, peaceful and beautiful again, maintaining the visual style of seed, emphasizing the serene yet unsettling calm.png',
    storyText: `At dawn, the garden resets. The statues return to their previous positions. The chessboard is pristine again.\n\nThe caretaker greets the next visitor with the same words: “Never step on the chessboard after midnight.”\n\nAditya now stands near the lamppost. A new statue. His eyes scream silently.\n\nThe garden waits for the next move.\n\nTheme: Horror is cyclical. The past becomes part of the architecture of evil.`
  }
];
