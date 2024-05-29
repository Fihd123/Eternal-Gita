import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Pdf from 'react-native-pdf';
import {langContext} from '../context/LangContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chapter = ({route}) => {
  const id = route.params;

  const defaultSource = {
    uri: 'https://eternalgurukul.com/public/files/bhagwad-gita/chapter3/eng.pdf',
    cache: true,
  };

  const {language, changeLanguage} = useContext(langContext);

  const storeLanguagePreference = async lang => {
    try {
      await AsyncStorage.setItem('language', lang);
      changeLanguage(lang);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  const [pdfUrl, setPdfUrl] = useState([]);

  const fetchChapters = async () => {
    try {
      const response = await fetch(
        `https://eternalgurukul.com/public/api/get-chapter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lang: language,
            chapter: id,
          }),
        },
      );
      const data = await response.json();
      setPdfUrl(data);
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }
  };

  useEffect(() => {
    fetchChapters();
  }, [language]);

  let sourceUri = '';
  if (pdfUrl.length > 0) {
    sourceUri =
      language === 'en' ? pdfUrl[0].english_pdf : pdfUrl[0].bengali_pdf;
  }

  const source = sourceUri ? {uri: sourceUri, cache: true} : null;

  return (
    <View style={{flex: 1}}>
      <Pdf
        trustAllCerts={false}
        source={source ? source : defaultSource}
        onLoadComplete={(numberOfPages, filePath) => {}}
        onError={error => {}}
        style={styles.pdf}
      />
    </View>
  );
};

export default Chapter;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
  },
});
