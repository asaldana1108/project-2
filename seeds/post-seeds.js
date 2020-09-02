const { Post } = require('../models');

const postdata = [
    {
        title: 'The Dark Tower VI: Song of Susannah',
        description: 'The Wolves have been defeated, but our tet faces yet another catastrophe. Susannah Dean’s body has been usurped by a demon named Mia who wants to use Susannah’s mortal form to bear a demon child. Stealing Black Thirteen, Mia has traveled through the Unfound Door to 1999 New York where she plans to give birth to her chap, a child born of two mothers and two fathers who will grow up to be Roland’s nemesis. With the help of the time-traveling Manni, Roland and Eddie plan to follow Susannah while Father Callahan and Jake will find Calvin Tower, owner of the vacant lot where a magical rose grows: a rose that must be saved at all costs. But despite our ka-tet’s intentions, ka has its own plans. Jake, Callahan, and Jake’s bumbler companion are transported to New York to follow Susannah, while Eddie and Roland are tumbled into East Stoneham, Maine, where they are greeted by Eddie’s old enemy, the gangster Balazar. But it isn’t just bullets that Roland and Eddie must brave. Soon they will meet their maker, in the form of a young author named Stephen King.',
        user_id: 1
    },
    {
        title: 'The Dark Tower I',
        description: 'The Man in Black fled across the desert, and the gunslinger followed. So begins Book I of Stephen King’s iconic fantasy series, The Dark Tower. Part sci-fi novel, part futuristic dystopia, part spaghetti Western, and part high fantasy vision, The Gunslinger tells the story of Roland Deschain, Mid-World’s last gunslinger, who is tracking an enigmatic magician known only as the man in black. Following his quarry across the demon-infested Mohaine Desert, Roland confronts a mad preacher woman and her murderous flock, holds palaver with a speaking demon, and finally befriends a young boy from our world named Jake Chambers. Jake joins Roland on his quest, but while Roland travels with his young companion Jake, the man in black travels with Roland’s soul in his pocket.',
        user_id: 2
    },
    {
        title: 'The Dark Tower II: The Drawing of the Three',
        description: 'After his final confrontation with the Man in Black in a remote mountain Golgotha, an exhausted Roland awakes on the beach of the Western Sea and is immediately attacked by a shoreline monster known as a lobstrosity. Roland kills the clawed creature, but not before it bites off two of his fingers and half of one big toe. Fighting off the delirium brought on by the lobstrosity’s poison, Roland forces himself along the beach where he discovers three freestanding doorways that lead into our world. The first opens onto New York, 1987, and the mind of a heroin addict called Eddie Dean. The second leads to 1964 and the divided personality of Odetta Holmes/Detta Walker, an African American woman who has lost the bottom half of her legs but gained a second, psychotic self. The third door leads to 1977 and the mind of a psychopath called The Pusher, the very criminal responsible for Odetta’s injuries. Roland’s task is to make Eddie and Odetta into gunslingers before raging Detta destroys them all, and before the Pusher can continue his bloody killing spree.',
        user_id: 3
    },
    {
        title: 'The Dark Tower VII: The Gunslinger',
        description: 'At the outset of the final installment of our saga, Roland’s ka-tet is scattered across several different  wheres and whens. Susannah Dean (still in the clutches of the demon Mia) is in End-World’s Fedic Dogan: a chamber of horrors where magic and technology can be merged and where a monstrous half-human child can be brought forth into the world. Eddie Dean and Roland Deschain are in Maine, 1977, searching for the site of otherworldly walk-in activity, and a possible doorway back to Mid-World. Jake Chambers, Father Callahan, and the bumbler Oy are battling vampires and low men in New York’s Dixie Pig Restaurant, circa 1999, a place where long pig is definitely on the menu. As soon as our tet reunites, they must journey to the headquarters of Thunderclap’s Wolves in order to discover exactly why the Crimson King’s minions have been culling the brains of young children for twin-telepathy enzymes. The answer is more horrible than they realized, and bears directly upon Roland’s quest to reach the Dark Tower.',
        user_id: 4
    },
    {
        title: 'The Dark Tower III: The Waste Lands',
        description: 'Several months have passed, and Roland’s two new tet-mates have become proficient gunslingers. Eddie Dean has given up heroin, and Odetta’s two selves have joined, becoming the stronger and more balanced personality of Susannah Dean. But while battling The Pusher in 1977 New York, Roland altered ka by saving the life of Jake Chambers, a boy who—in Roland’s where and when—has already died. Now Roland and Jake exist in different worlds, but they are joined by the same madness: the paradox of double memories. Roland, Susannah, and Eddie must draw Jake into Mid-World then follow the Path of the Beam all the way to the Dark Tower. But nothing is easy in Mid-World. Along the way our tet stumbles into the ruined city of Lud, and are caught between the warring gangs of the Pubes and the Grays. The only way out of Lud is to wake Blaine the Mono, an insane train that has a passion for riddling, and for suicidal journeys.',
        user_id: 5
    },
    {
        title: 'The Dark Tower IV S: The Wind Through the Keyhole',
        description: 'Although it is officially the eighth book of the Dark Tower saga, Stephen King likes to call The Wind Through the Keyhole book 4.5 of the series, since it takes place after our tet escapes the Green Palace at the end of Wizard and Glass, and before they reach Calla Bryn Sturgis, setting for Wolves of the Calla. The Wind Through the Keyhole is a story within a story within a story. At the outset, Roland and his American tet are traveling toward the River Whye in Mid-World. A great storm, called a Starkblast, is about to blow. While our tet is sheltering from the storm, Roland tells a story about his younger days, when he and his tet-mate Jamie DeCurry were sent to Debaria to investigate reports of a skin-man, a kind of dangerous shape-changer. While trying to comfort a young boy named Bill Streeter—the only survivor of a particularly brutal attack by the skin-man, and Roland’s only witness to the crime—Roland recounts yet another story. This time it is a sinister fairytale drawn from the book Magic Tales of Eld. The three stories are woven together by the freezing, howling winds of the Starkblast.',
        user_id: 6
    },
    {
        title: 'The Dark Tower IV: Wizard and Glass',
        description: 'Roland, Eddie, Susannah, Jake, and Jake’s pet bumbler survive Blaine the Mono’s final crash, only to find themselves stranded in an alternate version of Topeka, Kansas, one that has been ravaged by the superflu virus. While following the deserted I-70 toward a distant glass palace, they hear the atonal squalling of a thinny, a place where the fabric of existence has almost entirely worn away. While camping near the edge of the thinny, Roland tells his ka-tet a story about another thinny, one that he encountered when he was little more than a boy. Over the course of one long magical night, Roland transports us to the Mid-World of long-ago and a seaside town called Hambry, where Roland fell in love with a girl named Susan Delgado, and where he and his old tet-mates Alain and Cuthbert battled the forces of John Farson, the harrier who—with a little help from a seeing sphere called Maerlyn’s Grapefruit—ignited Mid-World’s final war.',
        user_id: 7
    },
    {
        title: 'The Dark Tower V: Wolves of the Calla',
        description: 'Roland and his tet have just returned to the path of the Beam when they discover that they are being followed by a group of inexperienced trackers. The trackers are from the town of Calla Bryn Sturgis, and they desperately need the help of gunslingers. Once every generation, a band of masked riders known as the Wolves gallop out of the dark land of Thunderclap to steal one half of all the twins born in the Callas. When the children are returned, they are  roont, or mentally and physically ruined. In less than a month, the Wolves will raid again. In exchange for Roland’s aid, Father Callahan—a priest originally from our world—offers to give Roland a powerful but evil seeing sphere, a sinister globe called Black Thirteen which he has hidden below the floorboards of his church. Not only must Roland and his tet discover a way to defeat the invincible Wolves, but they must also return to New York so that they can save our world’s incarnation of the Dark Tower from the machinations of the evil Sombra Corporation.',
        user_id: 8
    },
    {
        title: 'The Girl with the Dragon Tattoo',
        description: `A spellbinding amalgam of murder mystery, family saga, love story, and financial intrigue.  It's about the disappearance 40 years ago of Harriet Vanger, a young scion of one of the wealthiest families in Sweden...and about her octogenarian uncle, determined to know the truth about what he believes was her murder.  It's about Mikael Blomkvist, a crusading journalist recently at the wrong end of a libel case, hired to get to the bottom of Harriet's disappearance...and about Lisbeth Salander, a 24-year-old, pierced and tattooed genius hacker possessed of the hard-earned wisdom of someone twice her age, who assists Blomkvist with the investigation.  This unlikely team discovers a vein of nearly unfathomable iniquity running through the Vanger family, astonishing corruption in the highest echelons of Swedish industrialism - and an unexpected connection between themselves.`,
        user_id: 9
    },
    {
        title: 'The Girl Who Played with Fire',
        description: 'The electrifying follow-up to the phenomenal best seller The Girl with the Dragon Tattoo ("An intelligent, ingeniously plotted, utterly engrossing thriller" The Washington Post), and this time it is Lisbeth Salander, the troubled, wise-beyond-her-years genius hacker, who is the focus and fierce heart of the story.',
        user_id: 10
    },
    {
        title: `The Girl Who Kicked the Hornet's Nest`,
        description: 'Lisbeth Salander—the heart of Larsson’s two previous novels—lies in critical condition, a bullet wound to her head, in the intensive care unit of a Swedish city hospital. She’s fighting for her life in more ways than one: if and when she recovers, she’ll be taken back to Stockholm to stand trial for three murders. With the help of her friend, journalist Mikael Blomkvist, she will not only have to prove her innocence, but also identify and denounce those in authority who have allowed the vulnerable, like herself, to suffer abuse and violence. And, on her own, she will plot revenge—against the man who tried to kill her, and the corrupt government institutions that very nearly destroyed her life.',
        user_id: 11
    },
    {
        title: 'Heir to the Empire',
        description: 'Five years after the Death Star was destroyed and Darth Vader and the Emperor were defeated, the galaxy is struggling to heal the wounds of war, Princess Leia and Han Solo are married and expecting twins, and Luke Skywalker has become the first in a long-awaited line of new Jedi Knights.  But thousands of light-years away, the last of the Emperor’s warlords - the brilliant and deadly Grand Admiral Thrawn - has taken command of the shattered Imperial fleet, readied it for war, and pointed it at the fragile heart of the New Republic. For this dark warrior has made two vital discoveries that could destroy everything the courageous men and women of the Rebel Alliance fought so hard to create.',
        user_id: 12
    },
    {
        title: 'Dark Force Rising',
        description: `The dying Empire's most cunning and ruthless warlord - Grand Admiral Thrawn - has taken command of the remnants of the Imperial fleet and launched a massive campaign aimed at the New Republic's destruction. With the aid of unimaginable weapons long hidden away by the Emperor on a backwater planet, Thrawn plans to turn the tide of battle, overwhelm the New Republic, and impose his iron rule throughout the galaxy.`,
        user_id: 13
    },
    {
        title: 'The Last Command',
        description: `The embattled Republic reels from the attacks of Grand Admiral Thrawn, who has marshaled the remnants of the Imperial forces and driven the Rebels back with an abominable technology recovered from the Emperor's secret fortress: clone soldiers. As Thrawn mounts his final siege, Han and Chewbacca struggle to form a coalition of smugglers for a last-ditch attack against the empire, while Leia holds the Alliance together and prepares for the birth of her Jedi twins.`,
        user_id: 14
    },
    {
        title: 'Vector Prime',
        description: `Twenty-one years have passed since the heroes of the Rebel Alliance destroyed the Death Star, breaking the power of the Emperor. Since then, the New Republic has valiantly struggled to maintain peace and prosperity among the peoples of the galaxy. But unrest has begun to spread; tensions erupt in outbreaks of rebellion that, if unchecked, threaten to destroy the Republic'stenuous reign.`,
        user_id: 15
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;