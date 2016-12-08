'use strict';

var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z = ' ';

function Template ( title, template, needed, input, lyricLib){
  this.songTitle = title;
  this.template = template;
  this.needed = needed;
  this.input = input;
  this.lyricLib = lyricLib;
}

var rapTemplate1 = new Template (/*title*/'Gin \'n\' Juice',/*template*/'With so much drama in the L-B-C \n
It\'s kinda + ***Noun*** + bein Snoop D-O-double-G \n
But I, somehow, some way \n
Keep comin up with + ***Adjective***N + ass + ***Synonym for Excrement*** + like every single day \n
May I, kick a little something for the G\'s (yeah) \n
and, make a few ends as (yeah!) I breeze, through \n
Two in the mornin and the party's still + ***Verb Ending in –ing*** + \n
cause my momma ain\'t home \n
I got + ***Female Animal (plural)*** + in the living room gettin it on \n
and, they ain\'t leavin til six in the mornin (six in the morning) \n
So what you wanna do, sheeeit \n
I got a pocket full of + ***Plural Noun*** + and my homeboys do too \n
So turn off the lights and close the doors \n
But (but what) we don\'t love them + ***Gardening Tool (plural)*** + , yeah! \n
So G\'s up, + ***Gardening Tool (plural)*** + down, while you motherfuckers bounce to this \n +
***Verb Ending in -ing*** +  down the street, smokin indo, + ***Synonym for Drinking*** + on + ***Liquid*** + and juice \n
Laid back [with my mind on my + ***Noun*** + and my + ***Same Noun As Before*** + on my mind] \n
Now, that, I got me some Seagram\'s + ***Liquid*** + \n
Everybody got they cups but they ain\'t chipped in \n
Now this types of  + ***Synonym for Excrement*** + , happens all the time \n
You got to get yours + ***Derogatory Name*** + but I gotta get mine \n
Everything is fine when you + ***Verb Ending in -ing*** + to the D-O-G \n
I got the cultivating music that be captivating he \n
who listens, to the words that I speak \n
As I take me a drink to the middle of the street \n
and get to mackin to this + ***Female Animal*** + named Sadie (Sadie?) \n
She used to be the homeboy's lady (Oh, that  + ***Female Animal*** + ) \n
Eighty degrees, when I tell that bitch please \n
Raise up off these N-U-T's, cause you gets none of these \n
At ease, as I mob with the Dogg Pound, feel the breeze \n
beeeeeitch, I\'m just< \n
Rollin down the street, smokin indo, sippin on gin and juice \n
Laid back [with my mind on my money and my money on my mind] \n
Rollin down the street, smokin indo, sippin on gin and juice \n
Laid back [with my mind on my money and my money on my mind] \n
Later on that day \n
My homey Dr. Dre came through with a gang of Tanqueray \n
And a fat ass J, of some + ***Adjective*** + chronic that made me choke \n
+ ***Synonym for Excrement*** + this ain\'t no joke \n
I had to back up off of it and sit my cup down \n
Tanqueray and chronic, yeah I'm fucked up now \n
But it ain\'t no stoppin, I\'m still poppin \n
Dre got some + ***Female Animal (plural)*** + from the city of Compton \n
To serve me, not with a cherry on top \n
Cause when I bust my + ***Organ*** + , I\'m raisin up off the cot \n
Don't get upset girl, that's just how it goes \n
I don\'t love you + ***Gardening Tool (plural)*** + , I'm out the do\' \n
And I'll be \n
Rollin down the street, smokin indo, sippin on + ***Liquid*** + and juice \n
Laid back [with my mind on my money and my money on my mind] \n
Rollin down the street, smokin indo, sippin on + ***Liquid*** + and juice \n
Laid back [with my mind on my money and my money on my mind] \n
'
var rockTemplate1 = new Template (/*title*/'Welcome to the Jungle',/*template*/'Welcome to the ' + '***Natural Place***' + ' we got fun and games \n We got everything you want' + '***Sweet Substance***' + ', we know the names \n We are the ' + '***Plural Noun***' + ' that can ' + '***Verb***' + ' whatever you may need \n If you got the ' + '***Noun***' + ' honey we got your ' + '***Disease***' + '\n In the ' + '***Natural Place***' + ', welcome to the ' + '***Natural Place***' + '\n Watch it bring you to your sha na na na na ' + '***Body-Part (Plural)***' + '\n I wanna watch you bleed \n \n Welcome to the ' + '***Natural Place#***' + ' we take it day by day \n If you want it you\'re gonna bleed but it\'s the price you pay \n And you\'re a very ' + '***Adjective***' + ' ' + '***Noun***' + ' very ' + '***Adjective***' + ' to please \n You can taste the ' + '***Adjective***' + ' ' + '***Plural Noun***' + ' but you won\'t get there for free \n In the jungle welcome to the ' + '***Natural Place***' + '\n Feel my, my, my, my serpentine \n I,I wanna hear you ' + '***Verb***' + '\n \n Welcome to the ' + '***Natural Place***' + ' it gets worse here everyday \n You learn to live like an ' + '***Noun***' + ' in the ' + '***Natural Place***' + ' where we ' + '***Verb***' + '\n If you got a hunger for what you see you\'ll ' + '***Verb***' + ' it eventually \n You can have everything you want but you better not take it from me \n In the ' + '***Natural Place***' + ', welcome to the ' + '***Natural Place***' + '\n Watch it bring you to your sha na na na na ' + '***Body Part (Plural)***' + '\n I\'m gonna watch you bleed \n \n And when you\'re high you never ever want to come down \n So down, so down, so down, yeah \n',
['Natural Place', 'Sweet Substance', 'Plural Noun', 'Verb', 'Noun', 'Disease', 'Natural Place', 'Natural Place', 'Body-Part (Plural)', 'Natural Place', 'Adjective', 'Noun', 'Adjective', 'Adjective', 'Plural Noun', 'Natural Place', 'Verb', 'Natural Place', 'Noun', 'Natural Place', 'Verb', 'Verb', 'Natural Place', 'Natural Place', 'Body-Part (Plural)'],
[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y],
'Welcome to the ' + a + ' we got fun and games \n We got everything you want' + b + ', we know the names \n We are the ' + c + ' that can ' + d + ' whatever you may need \n If you got the ' + e + ' honey we got your ' + f + '\n In the ' + g + ', welcome to the ' + h + '\n Watch it bring you to your sha na na na na ' + i + '\n I wanna watch you bleed \n \n Welcome to the ' + j + ' we take it day by day \n If you want it you\'re gonna bleed but it\'s the price you pay \n And you\'re a very ' + k + '' + l + ' very ' + m + ' to please \n You can taste the ' + n + '' + o + 'but you won\'t get there for free \n In the jungle welcome to the ' + p + '\n Feel my, my, my, my serpentine \n I,I wanna hear you ' + q + '\n \n Welcome to the ' + r + ' it gets worse here everyday \n You learn to live like an ' + s + 'in the ' + t + ' where we' + u + '\n If you got a hunger for what you see you\'ll' + v + 'it eventually \n You can have everything you want but you better not take it from me \n In the ' + w + ', welcome to the ' + x + '\n Watch it bring you to your sha na na na na ' + y + '\n I\'m gonna watch you bleed \n \n And when you\'re high you never ever want to come down \n So down, so down, so down, yeah \n')

var countryTemplate1 = new Template (/*title*/'Walkin\' After Midnight',/*template*/'I go out ' + '***Verb Ending in –ing***' + ' after midnight \n Out in the moonlight  \n Just like we used to do \n I\'m always ' + '***Verb Ending in –ing***' + '  after midnight ' + '***Verb Ending in –ing***' + ' for you \n I ' + '***Verb***' + ' for miles along the highway \n Well, that\'s just my way \n Of sayin\' I love you \n I\'m always ' + '***Verb Ending in –ing***' + ' after midnight, ' + '***Verb Ending in –ing***' + ' for you \n I stop to see a ' + '***Verb Ending in –ing***' + ' ' + '***Plant Species***' + ' ' + '***Verb Ending in –ing***' + ' on his pillow \n Maybe he\'s ' + '***Verb Ending in –ing***' + ' for me \n And as the ' + '***Plural Noun***' + ' turn gloomy \n Night winds ' + '***Verb***' + ' to me \n I\'m ' + '***Adjective***' + ' as I can be \n I go out ' + '***Verb Ending in –ing***' + ' after midnight \n Out in the starlight \n Just hopin\' you may be \n Somewhere a-' + '***Verb Ending in –ing***' + ' after midnight, ' + '***Verb Ending in –ing***' + ' for me \n I stop to see a ' + '***Verb Ending in –ing***' + ' ' + '***Plant Species***' + ' ' + '***Verb Ending in –ing***' + ' on his pillow \n Maybe he\'s ' + '***Verb Ending in –ing***' + ' for me \n And as the ' + '***Plural Noun***' + ' turn gloomy \n Night winds ' + '***Verb***' + ' to me \n I\'m ' + '***Adjective***' + ' as I can be \n I go out ' + '*** Verb Ending in –ing***' + ' after midnight \n Out in the starlight \n Just hopin\' you may be \n Somewhere a-' + '*** Verb Ending in –ing***' + ' after midnight, ' + '*** Verb Ending in –ing***' + ' for me \n',
['Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Plant Species', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Plural Noun', 'Verb', 'Adjective', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Plant Species', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Plural Noun', 'Verb', 'Adjective', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing'],
[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y],
'I go out ' + a + ' after midnight \n Out in the moonlight  \n Just like we used to do \n I\'m always ' + b + 'after midnight ' + c + ' for you \n I ' + d + ' for miles along the highway \n Well, that\'s just my way \n Of sayin\' I love you \n I\'m always ' + e + ' after midnight, ' + f + ' for you \n I stop to see a ' + g + ' ' + h + ' ' + i + ' on his pillow \n Maybe he\'s ' + j + ' for me \n And as the ' + k + 'turn gloomy \n Night winds ' + l + ' to me \n I\'m ' + m + ' as I can be \n I go out ' + n + ' after midnight \n Out in the starlight \n Just hopin\' you may be \n Somewhere a-' + o + ' after midnight, ' + p + ' for me \n I stop to see a ' + q + ' ' + r + ' ' + s + ' on his pillow \n Maybe he\'s ' + t + ' for me \n And as the ' + u + ' turn gloomy \n Night winds ' + v + ' to me \n I\'m ' + w +  'as I can be \n I go out ' + x + ' after midnight \n Out in the starlight \n Just hopin\' you may be \n Somewhere a-' + y + ' after midnight, ' + z + ' for me \n');
