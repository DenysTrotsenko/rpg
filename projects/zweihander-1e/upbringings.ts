import {Upbringing} from './models';
import {AttributeId, UpbringingId} from './enums';

export const UPBRINGINGS: Upbringing[] = [
  {
    id: UpbringingId.CULTURED,
    name: 'Cultured',
    attribute: AttributeId.FELLOWSHIP,
    labels: {
      description: 'Entertainers, painters and parties made you what you are today. From the penny theatres on the street corners to the auditoriums of playhouses, you were immersed in cultures other than your own since birth. You were taught the value of expression, pride in your abilities, and not to trust anyone else easily. You have developed a sharp eye and an even sharper tongue.'
    }
  },
  {
    id: UpbringingId.FORGOTTEN,
    name: 'Forgotten',
    attribute: AttributeId.AGILITY,
    labels: {
      description: 'You were raised outside of common society and had little opportunity to integrate until now. Maybe you grew up on the streets, were raised by wolves or are the last scion of a noble house. Being from an outcast family afforded benefits, but today, you have nothing but yourself to rely upon. You became quick and lithe, but you feel as if there is a hole in your life.'
    }
  },
  {
    id: UpbringingId.INDUSTRIOUS,
    name: 'Industrious',
    attribute: AttributeId.BRAWN,
    labels: {
      description: 'The lot of most people, you were born into a family of hard laborers. Whether they be servants, farmers, craftsmen or engineering nobles, your family forced you to work to put food on the table for you and your doubtless countless siblings. Your hands are chapped and hard, your back rippling and your demeanor rough. You prefer to do things yourself rather than to pay others to do it for you.'
    }
  },
  {
    id: UpbringingId.MILITANT,
    name: 'Militant',
    attribute: AttributeId.COMBAT,
    labels: {
      description: 'Rote and discipline has ruled your life and hardened you. Your family traces their lineage down a long line of soldiers, generals and sappers, and more of your ancestors met their death at the end of a sword than in a sick bed. You have nursed many a beating in your bed, taught these same harsh lessons by the bellicose figures in your life.'
    }
  },
  {
    id: UpbringingId.OPPORTUNISTIC,
    name: 'Opportunistic',
    attribute: AttributeId.PERCEPTION,
    labels: {
      description: 'Your family has been underhanded from long before you were born. Whether they be common thieves or government officials stealing from the poor, you learned that everyone is little more than an angle or a walking coin purse. But lucre takes a certain mindset, as you learned to read others??? intentions. This lead to a preternatural ability to scrutinize truth from lies.'
    }
  },
  {
    id: UpbringingId.REVERENT,
    name: 'Reverent',
    attribute: AttributeId.WILLPOWER,
    labels: {
      description: 'The gods are fickle and your family raised you to fear and respect their capricious ways. You may have been raised by priests or nuns, attending religious school every week and performing in too many religious plays to count. Perhaps you were orphaned and sat on the street corner, memorizing the words of doomsayers or street prophets. Regardless, their dogma has taught you to be strong of heart and will.'
    }
  },
  {
    id: UpbringingId.SCHOLASTIC,
    name: 'Scholastic',
    attribute: AttributeId.INTELLIGENCE,
    labels: {
      description: 'From a young age, you were taught that knowledge is the ultimate weapon. It does not matter if you were raised by scholars to learn or nascent magicians to read omens, you were forced to understand the world around you and to keep your head out of the clouds. Pronunciation and proper diction, more than anything else, was ingrained into you (and your knuckles likely bled from being rapped for elocutionary mistakes). You came out smarter and wiser, but perhaps not well-rounded.'
    }
  }
];
