import React, { Component, } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class BancoReact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            idade: 0,
            status: false,
            sexoValue: 0,
            sexo: [
                { key: 1, sexo: "Masculino" },
                { key: 2, sexo: "Feminino" },
            ],
            limite: 250,
            tituloi: ''
            , nomei: ''
            , idadei: Number
            , sexoi: ''
            , limitei: null, estudantei: '',
            resposta: null,
            respostaTexto: null,
            respostaTitulo: null
        };
        this.enviarDados = this.enviarDados.bind(this)
    }
    enviarDados() {

        if (this.state.nome === '' || this.state.idade === '') {
            alert('Preencha todos dados corretamente!')
            return;
        }
        this.setState({ resposta: styles.respostaContainer })
        this.setState({ respostaTitulo: styles.respostaTituloS })
        this.setState({ respostaTexto: styles.respostaTextoC })
        this.setState({ tituloi: 'Conta aberta com sucesso!!' })
        this.setState({ nomei: 'Nome: ' + this.state.nome })
        this.setState({ idadei: 'Idade: ' + this.state.idade })
        this.setState({ sexoi: 'Sexo: ' + this.state.sexo[this.state.sexoValue].sexo },)
        this.setState({ limitei: 'Limite: ' + this.state.limite },)
        this.setState({ estudantei: 'Estudante: ' + (this.state.status) ? 'Ativo' : 'Inativo' })
    }

    render() {
        let sexoItem = this.state.sexo.map((v, k) => {
            return <Picker.item style={styles.textoPicker} key={k.key} value={k.key} label={v.sexo}></Picker.item>
        });

        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={styles.textoI}>Nome</Text>
                        <TextInput style={styles.inputI} placeholder="Digite o seu nome"
                            onChangeText={(texto) => this.setState({ nome: texto })}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.textoI}>Idade</Text>
                        <TextInput style={styles.inputI} placeholder="Digite o sua idade" keyboardType="numeric"
                            onChangeText={(texto) => this.setState({ idade: texto })}></TextInput>
                    </View>
                    <Text style={styles.textoI}>Sexo</Text>
                    <View style={styles.pickerI}>

                        <Picker
                            selectedValue={this.state.sexoValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({ sexoValue: itemValue })}
                        >
                            {sexoItem}
                        </Picker>

                    </View>

                    <View>
                        <Text style={styles.textoI}>Limite</Text>
                        <Slider
                            minimumValue={250}
                            maximumValue={20000}
                            onValueChange={(valorSelecionado) => this.setState({ limite: valorSelecionado })}
                            value={this.state.limite}
                            minimumTrackTintColor="#00ff00"
                            maximumTrackTintColor="#ff0000"></Slider>
                        <Text style={{ fontSize: 30, alignSelf: "center",color:'#737373' }}>R$: {this.state.limite.toFixed(2)}</Text>
                    </View>

                    <View style={styles.estudanteContainter}>
                        <Text style={styles.textoI}> Estudante</Text>
                        <Switch
                            value={this.state.status}
                            onValueChange={(value) => this.setState({ status: value })}

                        ></Switch>
                    </View >
                    <View style={styles.btnArea}>
                        <TouchableOpacity style={styles.btn} onPress={this.enviarDados}>
                            <Text style={styles.btnTexto}>ABRIR CONTA</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={this.state.resposta}>
                        <Text style={this.state.respostaTitulo}>{this.state.tituloi}</Text>
                        <Text style={this.state.respostaTexto}>{this.state.nomei}</Text>
                        <Text style={this.state.respostaTexto}>{this.state.idadei}</Text>
                        <Text style={this.state.respostaTexto}>{this.state.sexoi}</Text>
                        <Text style={this.state.respostaTexto}>{this.state.limitei}</Text>
                        <Text style={this.state.respostaTexto}>{this.state.estudantei}</Text>
                    </View>
                </ScrollView >
            </View >


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        margin: 50,
        

    },
    textoI: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: '#737373',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputI: {
        borderColor: '#D2CEC5',
        borderWidth: 2,
        borderRadius: 4,
        padding: 10,
        width: 300,
        backgroundColor: '#F9F8F6',
        marginBottom: 10
    }
    , pickerI: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#D2CEC5',
        marginBottom: 10

    }, textoPicker: {
        color: '#737373',
        fontWeight: 'bold',
    }, estudanteContainter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    btnArea: {
        flexDirection: 'row',
        height: 60,
        width: 200,
        alignSelf: 'center'
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#D2CEC5',
        backgroundColor: '#fff',
        height: 40,
        margin: 17,
        borderRadius: 9,


    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#737373',

    },
    respostaContainer: {
        borderColor: '#D2CEC5',
        borderWidth: 2,
        borderRadius: 4,
        padding: 10,
        width: 300,
        backgroundColor: '#F9F8F6',
        marginTop: 10
    },
    respostaTextoC: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: '#737373',
        fontSize: 16,

    }, respostaTituloS: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: '#737373',
        fontSize: 20,
        fontWeight: 'bold',
    }

});