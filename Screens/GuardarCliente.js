import { StyleSheet, View, Text, Alert, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function GuardarCliente({ navigation }) {
    const [cedula, setCedula] = useState("");
    const [nombre, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [sexo, setSexo] = useState("");
    const [clientes, setClientes] = useState([]);

    const formatCedula = (text) => {
        let cleaned = text.replace(/[^0-9A-Za-z]/g, "");
        if (cleaned.length > 14) return text;
        if (cleaned.length > 3 && cleaned[3] !== "-") {
            cleaned = cleaned.slice(0, 3) + "-" + cleaned.slice(3);
        }
        if (cleaned.length > 10 && cleaned[10] !== "-") {
            cleaned = cleaned.slice(0, 10) + "-" + cleaned.slice(10);
        }
        return cleaned.toUpperCase();
    };

    const formatFecha = (text) => {
        let cleaned = text.replace(/[^0-9-]/g, "");
        cleaned = cleaned.replace(/-{2,}/g, "-");
        if (cleaned.length > 4 && cleaned[4] !== "-") {
            cleaned = cleaned.slice(0, 4) + "-" + cleaned.slice(4);
        }
        if (cleaned.length > 7 && cleaned[7] !== "-") {
            cleaned = cleaned.slice(0, 7) + "-" + cleaned.slice(7);
        }
        return cleaned;
    };

    const guardar = () => {
        if (!cedula || !nombre) return;

        const nuevoCliente = {
            cedula: cedula,
            nombres: nombre,
            apellidos: apellidos,
            fechaNac: fechaNacimiento,
            sexo: sexo,
        };

        setClientes([nuevoCliente, ...clientes]);
        Alert.alert('Éxito', 'Se guardó con éxito');

        setCedula('');
        setNombres('');
        setApellidos('');
        setFechaNacimiento('');
        setSexo('');
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#A9D9D0' }}>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                <Text style={styles.textEna}>Registrar</Text>

                <View style={styles.cajaTx}>
                    <Text style={styles.lebel}>Cédula:</Text>
                    <TextInput
                        style={styles.input}
                        value={cedula}
                        onChangeText={(text) => setCedula(formatCedula(text))}
                        placeholder="Ej: 365-130995-0002H"
                        maxLength={16}
                    />

                    <Text style={styles.lebel}>Nombres:</Text>
                    <TextInput
                        style={styles.input}
                        value={nombre}
                        onChangeText={setNombres}
                        placeholder=""
                    />

                    <Text style={styles.lebel}>Apellidos:</Text>
                    <TextInput
                        style={styles.input}
                        value={apellidos}
                        onChangeText={setApellidos}
                        placeholder=""
                    />

                    <Text style={styles.lebel}>Fecha de Nacimiento:</Text>
                    <TextInput
                        style={styles.input}
                        value={fechaNacimiento}
                        onChangeText={(text) => setFechaNacimiento(formatFecha(text))}
                        placeholder="YYYY-MM-DD"
                        keyboardType="numeric"
                        maxLength={10}
                    />

                    <Text style={styles.lebel}>Sexo:</Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={sexo}
                            onValueChange={(itemValue) => setSexo(itemValue)}
                        >
                            <Picker.Item label="Seleccione..." value="" style={styles.itemS} />
                            <Picker.Item label="Masculino" value="Masculino" style={styles.itemS} />
                            <Picker.Item label="Femenino" value="Femenino" style={styles.itemS} />
                        </Picker>
                    </View>
                </View>

                <View style={styles.contBoton}>
                    <TouchableOpacity style={styles.button} onPress={guardar}>
                        <FontAwesome6 name="pen-clip" size={23} color="#0D0D0D" style={styles.pen} />
                        <Text style={styles.buttonText}>Guardar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contBoton}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ListaCliente", { clientes })}>
                        <FontAwesome6 name="clipboard-list" size={23} color="#0D0D0D" style={styles.pen} />
                        <Text style={styles.buttonText}>Lista</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textEna: {
        fontSize: 30,
        color: "#0D0D0D",
        fontWeight: "bold",
    },
    cajaTx: {
        marginTop: 20,
    },
    contBoton: {
        marginTop: 10,
    },
    button: {
        backgroundColor: '#A9D9D0',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 18,
        borderColor: '#038C7F',
        borderWidth: 1,
        width: 300,
        height: 50,
        marginTop: 5,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0D0D0D',
        marginLeft: 5,
    },
    pen: {
        marginRight: 6,
    },
    lebel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 2,
        marginTop: 5,
        color: "#0D0D0D",
    },
    input: {
        borderRadius: 18,
        borderColor: "#038C7F",
        borderWidth: 1,
        width: 300,
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    picker: {
        backgroundColor: '#A9D9D0',
        width: 300,
        height: 50,
        marginTop: 5,
        borderRadius: 18,
        borderColor: "#038C7F",
        borderWidth: 1,
        justifyContent: 'center',
    },
    itemS: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#0D0D0D",
    }
});