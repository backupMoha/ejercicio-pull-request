/**
 * Para el ejercicio usaré algo sencillito como el primer ejercicio de la hoja
 */

 import read from 'readline-sync';
 import chalk from 'chalk';
 
 //Calcular area y perimetro de un cuadrado
 //Variables
 
 let lado: number, perimetro: number, area: number;
 
 lado = read.questionInt('Introduce el lado del cuadrado:')
 
 area = lado * lado
 perimetro = lado * 4
 
 console.log("Area: ",area)
 console.log("Perimetro: ", perimetro)
 
 