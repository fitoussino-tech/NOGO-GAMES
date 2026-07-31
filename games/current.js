// =====================================================================
//  YOUR GAMES  —  this is the only file you manage.
//  • Add a game: add one line to the list below.
//  • CURRENT_INDEX picks THIS WEEK'S free game
//      0 = first line, 1 = second line, 2 = third line, ...
//  • Every OTHER game in the list automatically shows in the vault
//    as a "previous game".
// =====================================================================
window.GAMES = [
  { title: 'WORD LADDER',    emoji: '🪜', path: 'games/word-ladder.html' },
  { title: 'SUMO SIMULATOR', emoji: '👹', path: 'games/sumo-simulator.html'}, 
  { title: 'TRADER SIMULATOR', emoji: '📈', path: 'games/tradergame.html'},
  { title: 'MOO.F.O', emoji: '🛸', path: 'games/moofo.html'}, 
  { title: 'HOSED', emoji: '🚒', path: 'games/hosed.html'},
  { title: 'CLASSROOM', emoji: '🧑‍🦯', path: 'games/classroom.html'},
  { title: 'SCALPEL', emoji: '😷', path: 'games/scalpel.html'},
  { title: 'LIFE SIMULATOR', emoji: '👶', path: 'games/lifesimulator.html'}, 
  { title: 'HONEY CLICKER', emoji: '🐝', path: 'games/honeyclicker.html'},
  {title: 'TEE-SMASH', emoji: '⛳️', path: 'games/teesmash.html'}
];
window.CURRENT_INDEX = 3;   // 0 = Word Ladder is this week's free game
