import { View, Text, FlatList, Image, TouchableOpacity, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCourseList } from '../../Services';
import SubHeading from '../SubHeading';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import CourseItem from './CourseItem';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({ courseLevel }) {
  const navigation = useNavigation();
  const [CourseList, setCourseList] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(courseLevel).then((resp) => {
      console.log('RESP--', resp);
      setCourseList(resp?.courses);
    });
  };
  let name = '';
  if (courseLevel === 'One') name = 'РАЗДЕЛ 1. Введение в Базы данных';
  if (courseLevel === 'Two') name = 'РАЗДЕЛ 2. Основы SQL';
  if (courseLevel === 'Three') name = 'РАЗДЕЛ 3. MS  SQL Server';
  if (courseLevel === 'Labs') name = 'Лабораторные работы';
  

  return (
    <View>
      <SubHeading text={name} color={courseLevel === 'One'||courseLevel === 'Labs' && Colors.WHITE} />
      <FlatList
        data={CourseList}
        key={CourseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('course-detail', {
                course: item,
              })
            }
          >
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
