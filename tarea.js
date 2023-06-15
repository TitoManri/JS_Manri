/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.sc303.clase4;

import javax.swing.JOptionPane;

/**
 *
 * @author Laboratorios
 */
public class Clase4 {

    public static void main(String[] args) {
        int estudiantes = 0;
        int nota_mayor = 0;
        int nota_menor = 100;
        int total = 0;
        
        int cantidad = Integer.parseInt(JOptionPane.showInputDialog("Digite el numero de estudiantes: "));
        cantidad = estudiantes;
        estudiantes = total;
        while (estudiantes == 0){
        int nota = Integer.parseInt(JOptionPane.showInputDialog("Digite su nota: "));
        
        
        if(nota >= 70 && nota <= 100){
            JOptionPane.showMessageDialog(null,"Aprovo");
        }else if (nota <= 70 && nota >= 0){
            JOptionPane.showMessageDialog(null,"Reprobo");
        }
        if(nota >= nota_mayor){
            nota = nota_mayor;
        }else if (nota <= nota_menor){
            nota = nota_menor;
        }
                estudiantes--;
        
        
        }
        JOptionPane.showMessageDialog(null,"La nota Mayor es: "+nota_mayor+"\n La nota menor es: "+nota_menor+"El total de estudiantes digitado es: "+total );
        
        }
        
    }

