import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('transporte.db');

function criarTabelas() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS motoristas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      cnh TEXT,
      telefone TEXT
    );

    CREATE TABLE IF NOT EXISTS passageiros (
      id INTEGER PRIMARY KEY,
      nome TEXT NOT NULL,
      telefone TEXT,
      endereco TEXT
    );
  `);

  console.log("Tabelas criadas com sucesso!");
}

export default function Index() {

  useEffect(() => {
    criarTabelas();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Banco conectado com SQLite!</Text>
    </View>
  );
}