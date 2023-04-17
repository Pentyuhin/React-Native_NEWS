import {Button, Text, View, TouchableOpacity, FlatList, Image, StyleSheet, Modal} from 'react-native';
import {gStyle} from "../styles/styles";
import {useState} from "react";
import { Ionicons } from '@expo/vector-icons';
import Form from "./Form";



export default function Main({ navigation }) {

    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!!', full: 'Google is cool!', key: '1', img: 'https://avatars.mds.yandex.net/i?id=8fce6c2b2f7fa607ddf5d251150069d98deb45f2-7710221-images-thumbs&n=13'}
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }



    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow}>
                <View style={gStyle.main}>
                    <Ionicons name="close-outline" size={34} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
                    <Text style={styles.title}>Форма добавление статей</Text>
                    <Form addArticle={addArticle}/>
                </View>
            </Modal>
            <Ionicons name="add" size={34} color="black" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
            <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("FullInfo", item)}>
                    <Image style={styles.image} source={{
                        uri: item.img
                    }}/>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30,

    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: "center",
        marginTop: 20,
        color: '#4747474'
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: "center",
        marginTop: 5,
        color: '#4747474'
    },
    image: {
        width: '100%',
        height: 210
    },
    iconAdd: {
        marginBottom: 15,
        textAlign: "center"
    },
    iconClose: {
        textAlign: "center"
    }
})

