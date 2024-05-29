import {StyleSheet, Text, View, ScrollView, useColorScheme} from 'react-native';
import React from 'react';

const About = () => {
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
        <Text style={styles.title}>About</Text>
        <Text style={styles.paragraph}>
          Gita is called the songs of God since these words emitted from the
          Lotus Mouth of Lord Sri Krishna which is compared to nectarine songs.
          It is the essence of one hundred and eight Upanishadas (the meaning of
          Vedas) and fifth Veda, the Mahavharata (the great history of the then
          Bharat Varsha). The knowledge of the Vedic Tree is so vast that it is
          not possible for a human being of this age having the life-span of
          highest one hundred year to read all these divine literatures. Vyas
          Deva understood that and put this greatest treasure in his work of
          Mhahavharata where in the Bishma-Parvan from chapter twenty three to
          forty is the Bhagavad Gita. Later Adi Guru Sankaracharia picked it
          from Mahabharata and presented separately to the people of the world
          as Bhagavad Gita. No literature existing in the creation where it can
          be seen that God Himself descended in this very earth and uttered His
          advices for the ultimate benefit of human society. This makes
          distinction of Gita from other scriptures. Another distinction of Gita
          is that the profound divine information which are found in other
          scriptures are also found in Gita and some such information that are
          not found in other scriptures are also found in Gita. Gita informs us
          who are we, why we have come in this mortal world, what is the nature
          of this world, how it works, who is God, what is our relations with
          God, where does God reside, what is the ultimate destination of the
          living beings, how living beings are controlled by the three modes of
          physical nature, how can be raised from these three qualities of
          nature, how the society is formed, what is the proper duty of a person
          as per his innate nature and acquired virtue, what is action, how we
          are carrying the result of our past actions whether it is good or bad,
          how can we destroy our result of karma (action), what is the purpose
          of Vedas, how can human being pass through different segment of
          knowledge and reach to the realm of Brahman (the true spiritual self),
          what is the distinction between matter and spirit, how to get
          liberation, the divine and demoniac nature of living beings and
          ultimately the surrendering process unto the Lotus Feet of God and its
          benefit. There are five basic subject matters in Gita which are jiva
          (the living being), iswara (the controller), prakriti (the nature),
          kala (the time) and karma (the action). Human being can only exert its
          influence on karma (action) due to the free will which is given to him
          by God out of love. So we can use this free will in a proper way or we
          can use it as per our own wish. Here God does not interfere since God
          does not want us to see as a doll or puppet. From first to six
          chapters of Gita broadly be termed as Karma Yoga (realization of God
          through action), from seven to twelve chapters are called Bhakti Yoga
          (realization of God through devotional service) and from thirteen to
          eighteen chapters are called Gyana Yoga ( realization of God through
          knowledge). We put our most precious thing always middle of something
          like a gem inside the box having a bottom and lid. Similarly Bhakti
          Yoga is the most precious thing in the Gita so Vyas Deva put it in the
          middle of all the Yogas described in the Gita. If all the Yogas are
          the rungs of a ladder then Bhakti Yoga is the topmost rung. So it is
          the ultimate destination of all the Yogas. Other process of Yogas
          facilitate to reach the place of Bhakti Yoga because God reveals
          Himself only before devotees who are in the path of Bhakti Yoga or
          devotion and only from devotional service truly God can be realized.
          This is the reason for choosing Arjuna for revealing the Bhagavad Gita
          to him by Lord Sri Krishna as Arjuna was His beloved friend having
          immense respect and devotion towards Him and he never tried to find
          any fault at Sri Krishna. What we think and do in our lifetime all are
          stored in our mind that creates a layer on our heart which forms our
          consciousness. At the time of death this consciousness will follow our
          soul and as per that very consciousness we will have to take our next
          birth in a body suitable or in conformity of that consciousness. In
          nature there are eight million and four hundred thousands of different
          species according to the variation of consciousness. So is the
          diversity of nature where some are trees, some are insects, some are
          aquatics, some are animals, some are birds and some are human beings.
          But in our life time if we can spiritualize our consciousness then we
          will go to the Kingdom of God in the spiritual world having spiritual
          consciousness and a spiritual body and from there living beings never
          come to the mortal existence and that is the end of the travel to
          samsara (continuous journey of birth and death). Bhagavad Gita teaches
          us the process of acquiring this spiritual consciousness. Joy Gita Joy
          Sri Krishna
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFD2B8',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemContainer: {
    marginVertical: 15,
    margin: 15,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  paragraph: {
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 28,
    letterSpacing: 0.12,
    justifyContent: 'center',
    fontSize: 12,
  },
});
export default About;
