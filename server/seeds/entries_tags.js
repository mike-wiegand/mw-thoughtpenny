
exports.seed = function(knex) {
  // Deletes ALL existing entries
  knex('entries_tags').del()
  knex('tags').del()
  return knex('entries').del()
    .then(function () {
      knex('entries_tags').insert([
        {
          tag_id: 1,
          entry_id: 1,
        },
        {
            tag_id: 2,
            entry_id: 1,
        },
        {
            tag_id: 3,
            entry_id: 2,
        },
        {
            tag_id: 1,
            entry_id: 2,
        },
        {
            tag_id: 4,
            entry_id: 3,
        },
        {
            tag_id: 5,
            entry_id: 3,
        },
        {
            tag_id: 4,
            entry_id: 4,
        },
        {
            tag_id: 1,
            entry_id: 5,
        },
        {
            tag_id: 2,
            entry_id: 6,
        },
        {
            tag_id: 3,
            entry_id: 6,
        },
        {
            tag_id: 2,
            entry_id: 7,
        },
        {
            tag_id: 3,
            entry_id: 8,
        },
        {
            tag_id: 1,
            entry_id: 8,
        },
        {
            tag_id: 6,
            entry_id: 9,
        },
      ])
      knex('tags').insert([
        {
          id: 1,
          tag: 'mindfulness'
        },
        {
            id: 2,
            tag: 'actualization'
        },
        {
            id: 3,
            tag: 'stoicism'
        },
        {
            id: 4,
            tag: 'inspiration'
        },
        {
            id: 5,
            tag: 'fear'
        },
        {
            id: 6,
            tag: 'strength'
        },
      ]);
      // Inserts seed entries
      return knex('entries').insert([
        {
          id: 1,
          user_id: 1,
          timestamp: 1518625200000,
          title: 'Quality of Mind',
          entry: 'The things you think about determine the quality of your mind.',
        },
        {
            id: 2,
            user_id: 1,
            timestamp: 1538006507000,
            title: 'Internal Justice',
            entry: 'Whoever does wrong, wrongs himself; whoever does injustice, does it to himself, making himself evil.',
        },
        {
            id: 3,
            user_id: 1,
            timestamp: 1544595784046,
            title: 'Overcoming Fear',
            entry: 'If you are pained by external things, it is not they that disturb you, but your own judgement of them. And it is in your power to wipe out that judgement now.',
        },
        {
            id: 4,
            user_id: 1,
            timestamp: 1520167535028,
            title: 'Justice',
            entry: 'Or is it your reputation that is bothering you? But look at how soon we are all forgotten. The abyss of endless time that swallows it all. The emptiness of those applauding hands. The people who praise us; how capricious they are, how arbitrary. And the tiny region it takes place. The whole earth a point in space - and most of it uninhabited.',
        },
        {
            id: 5,
            user_id: 1,
            timestamp: 1520167535028,
            title: 'Presence of mind',
            entry: 'Confine yourself to the present.',
        },
        {
            id: 6,
            user_id: 1,
            timestamp: 1520167535028,
            title: 'Self disturbance',
            entry: 'Do not disturb yourself by picturing your life as a whole; do not assemble in your mind the many and varied troubles which have come to you in the past and will come again in the future, but ask yourself with regard to every present difficulty: What is there in this that is unbearable and beyond endurance? You would be ashamed to confess it! And then remind yourself that it is not the future or what has passed that afflicts you, but always the present, and the power of this is much diminished if you take it in isolation and call your mind to task if it thinks that it cannot stand up to it when taken on its own.',
        },
        {
            id: 7,
            user_id: 1,
            timestamp: 1520167535028,
            title: 'Pathways',
            entry: 'Every living organism is fulfilled when it follows the right path for its own nature.',
        },
        {
            id: 8,
            user_id: 1,
            timestamp: 1520167535028,
            title: 'Fortune',
            entry: 'I was once a fortunate man but at some point fortune abandoned me. But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions.',
        },
        {
            id: 9,
            user_id: 1,
            timestamp: 1520167535028,
            title: 'Inner Strength',
            entry: 'Do not fear your present misfortune. Instead, believe you have the strength to endure it',
        },
      ]);
    });
};
