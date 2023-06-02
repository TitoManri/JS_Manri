/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.sc303.clase3;

import javax.swing.JOptionPane;

/**
 *
 * @author Laboratorios
 */
public class Clase3 {

    public static void main(String[] args) {
        /* Variables */
        int dia = Integer.parseInt(JOptionPane.showInputDialog("Digite un numero de dia: "));
        
        
        
        /* Contenido */
        if(dia == 1){
            JOptionPane.showMessageDialog(null,"El dia que digito es: \n Domingo");
        }else if (dia == 2){
            JOptionPane.showMessageDialog(null,"El dia que digito es: \n Lunes");
        }else if (dia == 3){
            JOptionPane.showMessageDialog(null,"El dia que digito es: \n Martes");
        }else if (dia == 4){
            JOptionPane.showMessageDialog(null,"El dia que digito es: \n Miercoles");
        }else if (dia == 5){
            JOptionPane.showMessageDialog(null,"El dia que digito es: \n Jueves");
        }else if (dia == 6){
            JOptionPane.showMessageDialog(null,"El dia que digito es: \n Viernes");
        }else if (dia == 7){
            JOptionPane.showMessageDialog(null,"El dia que digito es: \n Sabado");
        }else{
            JOptionPane.showMessageDialog(null,"Numero Invalido");
        }
    }       
}

