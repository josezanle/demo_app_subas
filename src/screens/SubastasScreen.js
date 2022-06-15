import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'

const SubastasScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.top_bar}>
            <View style={styles.user_coin_container}>
              <Image
                style={styles.mini_user_coin}
                source={{ uri: 'https://w7.pngwing.com/pngs/520/303/png-transparent-tether-united-states-dollar-cryptocurrency-fiat-money-market-capitalization-bitcoin-logo-bitcoin-trade.png' }}
              />
              <Text style={styles.user_balance}>165 USDT</Text>

            </View>
            <Text style={styles.cambiar_metodo_pago}>Cambiar meetodo de Pago</Text>
          </View>
          {/* .-------------------- */}
          {/* .-------------------- */}
          {/* .-------------------- */}
          <View style={styles.images_main}>
            <Image
              style={styles.first_image}
              source={{ uri: 'https://m.media-amazon.com/images/I/91f3KBP0xLL._AC_SS450_.jpg' }}
            />
            <Image
              style={styles.second_image}
              source={{ uri: 'https://www.nicepng.com/png/detail/12-123668_ropa-sombreros-sombrero-png.png' }}
            />
            <Image
              style={styles.third_image}
              source={{ uri: 'https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-8848376856606.jpg' }}
            />
          </View>
          {/* .-------------------- */}
          {/* .-------------------- */}
          {/* .-------------------- */}
          <View style={styles.motival_content}>
            <Text style={styles.motival_text_title}>Subasta tus articulos</Text>
            <Text style={styles.motival_text_p}>Con un limite de 24 hs.</Text>
            <Text style={styles.motival_text_p}>Solo deja que escojan el precio!</Text>
          </View>

          <Text style={styles.my_title}>Mis Subastas</Text>

          {/* -------------------------------------------- */}
          {/* -------------------------------------------- */}
          {/* -------------------------------------------- */}
          <View style={styles.subasted_article}>
            <Image
              style={styles.item}
              source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/154/653/products/45cb9c05-a113-4940-bbdc-9c3f3ae7fade-d50f1835542058ea3b16489222620910-1024-1024.jpeg' }}
            />
            <View style={styles.text_content}>
              <Text style={styles.item_title}>Sweater de Lana</Text>
              <Text style={styles.item_short_description}>50% off en ...</Text>
            </View>
            <View style={styles.goIcon}>
              <Text></Text>
            </View>
          </View>
          <View style={styles.subasted_article}>
            <Image
              style={styles.item}
              source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/154/653/products/45cb9c05-a113-4940-bbdc-9c3f3ae7fade-d50f1835542058ea3b16489222620910-1024-1024.jpeg' }}
            />
            <View style={styles.text_content}>
              <Text style={styles.item_title}>Sweater de Lana</Text>
              <Text style={styles.item_short_description}>50% off en ...</Text>
            </View>
            <View style={styles.goIcon}>
              <Text></Text>
            </View>
          </View>
          <View style={styles.subasted_article}>
            <Image
              style={styles.item}
              source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/154/653/products/45cb9c05-a113-4940-bbdc-9c3f3ae7fade-d50f1835542058ea3b16489222620910-1024-1024.jpeg' }}
            />
            <View style={styles.text_content}>
              <Text style={styles.item_title}>Sweater de Lana</Text>
              <Text style={styles.item_short_description}>50% off en ...</Text>
            </View>
            <View style={styles.goIcon}>
              <Text></Text>
            </View>
          </View>
          <Text style={styles.dots}>. . .</Text>
          {/* -------------------------------------------- */}
          {/* -------------------------------------------- */}
          {/* -------------------------------------------- */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
fontFamily: "SFUIDisplay-Bold"
export default SubastasScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 15
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  top_bar: {
    flexDirection: "row",
    justifyContent:"space-between",
  },
  user_coin_container: {
    width: 130,
    height: "100%",
    borderRadius: 10,
    alignContent: "center",
    flexDirection: "row",
  },
  mini_user_coin: {
    width: 25,
    height: 25,
    borderRadius: 15 / 2,
    resizeMode: 'cover'
  },
  user_balance: {
    fontWeight: "bold",
    textAlignVertical: "center",
    marginLeft: 5,
  },
  cambiar_metodo_pago: {
    fontWeight: "bold",
    fontSize:12,
    fontWeight:"bold",
    color:"#09be8b",
    textAlignVertical:"center"
  },
  // --------------
  // --------------
  images_main: {
    width: "100%",
    height: 300,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  first_image: {
    width: 100,
    height: 200,
    borderRadius: 10,
    zIndex: -1,
    transform: [{ rotate: "-10deg" }],
    marginRight: -30
  },
  second_image: {
    width: 180,
    height: 250,
    borderRadius: 10,
    zIndex: 1,
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 7,
    resizeMode: 'contain'
  },
  third_image: {
    width: 100,
    height: 200,
    borderRadius: 10,
    zIndex: -1,
    transform: [{ rotate: "10deg" }],
    marginLeft: -30

  },
  motival_content: {
    width: 200,
    borderRadius: 10,
    marginVertical: 15,
    padding:15,
    backgroundColor: "#09be8b",
  },
  motival_text_title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlignVertical:"center"
  },
  motival_text_p: {
    fontSize: 12,
    color: "white",
    textAlignVertical: "center"
  },
  //----------------------------------------
  //----------------------------------------
  my_title: {
    width: "100%",
    color: "#09be8b",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15
  },
  //---------------------------
  subasted_article: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    marginVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 7,
  },

  item: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#f1f1f1"
  },
  text_content: {
    width: "100%",
    flex: 1,
    paddingLeft: 15
  },
  item_title: {
    color: "#1c1c1c",
    fontSize: 16,
    textAlignVertical: "center",
    fontWeight: "bold"
  },
  item_short_description: {
    fontSize: 13,
    color: "silver",
    fontWeight: "bold",
    textAlignVertical: "center"
  },
  goIcon: {
    fontSize: 20,
    width: 20,
    height: 20,
    backgroundColor: "#09be8b",
    borderRadius:100
  },
  dots: {
    fontSize: 35,
    color: "grey",
    width: "100%",
    textAlign: "center"
  },
})