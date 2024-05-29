import React from 'react';
import {ScrollView, View, Text, StyleSheet, useColorScheme} from 'react-native';

const Preface = () => {
  const colorScheme = useColorScheme();
  const lightMode = colorScheme === 'light';

  const lightModeColors = {
    background: '#FFFFFF',
    text: '#000000',
  };

  const darkModeColors = {
    background: '#FFFFFF',
    text: '#333333',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#DFD2B8',
    },
    itemContainer: {
      marginVertical: 15,
      margin: 15,
      backgroundColor: lightMode
        ? lightModeColors.background
        : darkModeColors.background,
      padding: 20,
    },
    title: {
      fontSize: 14,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: '600',
      color: lightMode ? lightModeColors.text : darkModeColors.text,
    },
    paragraph: {
      textAlign: 'center',
      marginVertical: 10,
      lineHeight: 28,
      letterSpacing: 0.12,
      fontSize: 12,
      color: lightMode ? lightModeColors.text : darkModeColors.text,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Preface</Text>
        <Text style={styles.paragraph}>
          First of all, I bow to Vasudeva (Lord Krishna), the son of Vasudev,
          whom Mahamuni (the great saint) Vyasadeva has repeatedly referred to
          as 'Shri Bhagavan Uvacha' in the Gita. I bow to all the sadgurus (bona
          fide spiritual masters) and vaishnavas (devotees of Lord Vishnu) of
          the world who had been lighting the lamps of spiritual knowledge and
          exposing these profound sacred messages of God through unfolding the
          blind physical eyes of the people of this Kali Yoga; bow to my most
          revered parents by whose blessing a fallen soul like me got the
          opportunity to enter into this auspicious endeavor of introducing the
          divine words of Gita to the general mass, though I am totally
          incapable of doing so. I pay my deep gratefulness to Mr. Govinda
          Badya, Mr. Milind Navar, and his expert team members who worked so
          hard to compile this edition of the Gita. The Scripture Gita on Earth
          is the topmost guidebook for the true welfare and well-being of human
          society. We constantly see countless people educated in worldly
          education sometimes do such things that are causing serious
          destruction to many people, the environment, as well as the world
          itself. If they were enlightened by the knowledge of the Gita, they
          would never have done such things. The Gita always guides us to the
          right course of action, especially in our moments of crisis when we
          are shocked by the situation to decide what we should do at that very
          moment. Arjuna was also confused about what he should do in the
          battlefield of Kurukshetra. But at that time, he recognized Shri
          Krishna as his Guru and went to Him with the intention of getting
          advice. At that time Lord Krishna, the Jagad Guru (Spiritual Master of
          the Creation), left for people of the world the knowledge of Bhagavad
          Gita, setting Arjuna as an instrument. If many zeros are placed side
          by side, they have no real value. But it is only when a number except
          zero is placed first before these zeros then it actually carries
          value. Similarly, all the knowledge remains only mortal worldly
          knowledge, which is only intended for the four things, i.e., eating,
          sleeping, defending, and reproduction of the body unless we can give
          it the spiritual knowledge from scriptures such as Bhagavad Gita. This
          body, the world, its creatures whether it is moveable or immoveable,
          everything are changing and constantly decaying under the influence of
          the great Time. But the message of the Gita, emanated from the Lotus
          Mouth of Lord Krishna, is akshar (indestructible). If we can take
          shelter under the shadow of Gita, the chinmoy (spiritual) soul will
          get the taste of eternal life. And those who spread this message of
          God among the people of the world, Lord Krishna said in the Gita that
          there was no one in the past, no one in the present and no one will be
          in the future to be dearer before Him. When life force in this body
          exists, can't we join in the effort to be God's favorite or dear to
          God? How much anger, how much regret and frustration we have received
          from others due to being cheated repeatedly. But if we submit
          ourselves to God with respect and devotion, then we will never be
          regretted or frustrated rather we too can enter into the blissful life
          of God's eternal kingdom, where there is no need to immerse ourselves
          in the painful experience of birth, death, old age and disease by
          traveling repeatedly in the cycle of eight million four hundred
          thousand species of different creatures since time immemorial. If
          anyone can get a little spiritual taste from the message of the Gita
          feeling divine joy in the heart, then the efforts of this fallen soul
          will be considered a success. Jai Shri Krishna Adham (the fallen)
          Chiranjib
        </Text>
      </View>
    </ScrollView>
  );
};

export default Preface;
