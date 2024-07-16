import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Block from './Components/Block'
import Banner from './Components/Banner'
import Btn from './Components/Btn'
import TIP from './Components/TextIP'
import { Theme, useTheme } from './Components/Theme'


const App = () => {

  return (
    <Theme>
      <ScrollView>
        <Body />
      </ScrollView>
    </Theme>
  )
}
const Body = () => {
  const [ht, setHt] = useState('');
  const [tuoi, setTuoi] = useState('');
  const [idkhoa, setIdkhoa] = useState('');
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: theme === 'Sáng' ? '#CAD9D9' : '#304040' }}>
      <Banner />
      <View style={styles.container}>
        <Text style={{ color: theme === 'Sáng' ? '#000' : '#fff', marginRight: 20 }}>
          Màu giao diện: {theme}
        </Text>
        <Btn nut="Đổi giao diện" OP={toggleTheme} />
      </View>
      <View style={{ marginRight: 30, width: '94%' }}>
        <Block title='Thông tin cá nhân'>
          <TIP hint='Nhập họ và tên' oct={setHt} />
          <TIP hint='Nhập tuổi' oct={setTuoi} />
        </Block>
        <Block title='Thông tin khóa học'>
          <TIP hint='Nhập mã khóa học' oct={setHt} />
          <TIP hint='Nhập tên khóa học' oct={setTuoi} />
        </Block>
        <Block title='Thông tin liên hệ'>
          <Text></Text>
          <Text style={{ fontSize: 18 }}>Vui lòng liên hệ số điện thoại: 0987654321</Text>
          <Text></Text>
        </Block>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
})