package View;

import Controller.Controller;
import processing.core.PApplet;

public class Main extends PApplet{
	
	public static void main(String[] args) {
		PApplet.main("View.Main");
	}
	
	
	public void settings() {
		size(900,600);
		 
		 
	}
	
	Controller controller;
	
	
	
	
	
	public void setup() {
		textAlign(CENTER,CENTER);
		rectMode(CENTER);
		ellipseMode(CENTER);
		controller = new Controller(this);
		
		
	}
	

	public void draw() {
		background(255);
			controller.Draw(this); 
	}



	public void mousePressed() {
		
		controller.pararMovimiento(mouseX, mouseY);
			if(mouseButton==RIGHT) {
					controller.NuevaFigura(mouseX, mouseY);}
}
 }