import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ListarClientes({ route, navigation }) {
    
    const [clientes, setClientes] = useState([
    ]);

    const guardarNuevo = (nuevo) => {
        setClientes([...clientes, nuevo]);
    };

    const eliminarCliente = (index) => {
        setClientes(clientes.filter((_, i) => i !== index));
    };

    return (
        <View style={styles.container}>
            <View style={styles.contBoton}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("GuardarCliente", { guardarNuevo })}>
                    <AntDesign name="addusergroup" size={24} color="#0D0D0D" />
                </TouchableOpacity>
            </View>

            <Text style={styles.titulo}>Lista de Clientes</Text>
            {clientes.length === 0 ? (
                <Text style={styles.mensaje}>No hay clientes registrados.</Text>
            ) : (
                <ScrollView style={styles.lista}>
                    {clientes.map((cliente, index) => (
                        <View key={index} style={styles.card}>
                            <View style={styles.ElimBoton}>
                                <TouchableOpacity onPress={() => eliminarCliente(index)}>
                                    <MaterialIcons name="delete" size={35} color="#0D0D0D" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.label}>Cédula:</Text><Text style={styles.valor}>{cliente.nuevaCedula}</Text>
                            <Text style={styles.label}>Nombres:</Text><Text style={styles.valor}>{cliente.nuevoNombre}</Text>
                            <Text style={styles.label}>Apellidos:</Text><Text style={styles.valor}>{cliente.nuevosApellidos}</Text>
                            <Text style={styles.label}>Fecha de nacimiento:</Text><Text style={styles.valor}>{cliente.nuevaFecha}</Text>
                            <Text style={styles.label}>Sexo:</Text><Text style={styles.valor}>{cliente.nuevoSexo}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A9D9D0',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0D0D0D',
        marginBottom: 20,
        textAlign: 'center',
    },
    mensaje: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 40,
    },
    lista: {
        flex: 1,
    },
    card: {
        backgroundColor: '#038C7F',
        padding: 15,
        borderRadius: 18,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontWeight: 'bold',
        color: '#0D0D0D',
        fontSize: 16,
    },
    valor: {
        fontSize: 16,
        marginBottom: 6,
        color: '#0D0D0D',
        fontWeight: '400',
    },
    contBoton: {
        marginLeft: 290,
        marginTop: 2,
    },
    ElimBoton: {
    position: "absolute",
    top: 7,
    right: 9, 
    },
    button: {
        backgroundColor: '#A9D9D0',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 18,
        borderColor: '#038C7F',
        borderWidth: 1,
        width: 50,
        height: 50,
        marginTop: 5,
        justifyContent: 'center',
    },
});