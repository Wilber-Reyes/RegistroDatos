import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function ListarClientes({ route }) {
    const { clientes = [] } = route.params ?? {};

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Clientes</Text>
            {clientes.length === 0 ? (
                <Text style={styles.mensaje}>No hay clientes registrados.</Text>
            ) : (
                <ScrollView style={styles.lista}>
                    {clientes.map((i, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.label}>Cédula:</Text><Text style={styles.valor}>{i.cedula}</Text>
                            <Text style={styles.label}>Nombres:</Text><Text style={styles.valor}>{i.nombres}</Text>
                            <Text style={styles.label}>Apellidos:</Text><Text style={styles.valor}>{i.apellidos}</Text>
                            <Text style={styles.label}>Fecha de nacimiento:</Text><Text style={styles.valor}>{i.fechaNac}</Text>
                            <Text style={styles.label}>Sexo:</Text><Text style={styles.valor}>{i.sexo}</Text>
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
});