import {Button, Text, View, TextInput, StyleSheet, ViewComponent} from 'react-native';
import {gStyle} from "../styles/styles";
import  {Formik} from "formik";


export default function Form({addArticle}) {

    return (
        <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values, action) => {
                addArticle(values);
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.name}
                            placeholder={"Введите название..."}
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.anons}
                            placeholder={"Введите анонс..."}
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput
                            style={[styles.inputFull, styles.input]}
                            value={props.values.full}
                            multiline
                            placeholder={"Введите полное описание..."}
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.img}
                            placeholder={"Укажите фото URL"}
                            onChangeText={props.handleChange('img')}
                        />
                        <Button title={"Добавить"} onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderRadius: 5,
        borderColor: 'silver',

    },
    inputFull: {
        height: 150
    }
})