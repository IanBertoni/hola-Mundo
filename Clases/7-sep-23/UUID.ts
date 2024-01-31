import { BlobOptions } from 'buffer';
import { log } from 'console';
import { randomUUID } from 'crypto';
interface iAddress{
    street: string;
    number : number;
    aparment : string;
}
// Clase base para elementos de la biblioteca (libros y revistas)
class LibraryItem {
    private id : string = randomUUID();
    private  title: string;
    private year: number;
    private isAvailable: boolean = true;

    // Constructor para crear un nuevo elemento de la biblioteca
   public constructor(title: string, year: number) {
        this.title = title; // Asigna el título proporcionado
        this.year = year;   // Asigna el año proporcionado
    }
    public setTitle(title): void{
        this.title = title;
    }

    public setYear(year): void{
        this.year = year;
    }


    public getTitle(){
        return this.title
    }
    public getYear(){
        return this.year
    }

    checkAvailability() {
        return this.isAvailable;
    }

    markAsUnavailable(){
      this.isAvailable = false;
    }

    markAsAvailable(){
        this.isAvailable = true;
    }
}


// libros
// Clase para representar libros (hereda de LibraryItem)
class Book extends LibraryItem {
    author: string;

    constructor(title: string, year: number, author: string) {
        super(title, year); // Llama al constructor de la clase base (LibraryItem)
        this.author = author; // Asigna el autor proporcionado
    }

    setAuthor(author:string): void{
        this.author = author;
    }
    getAuthor(){
        return this.author;
    }
}

// Clase para representar revistas (hereda de LibraryItem)
class Magazine extends LibraryItem {
    editor: string;

    constructor(title: string, year: number, editor: string) {
        super(title, year); // Llama al constructor de la clase base (LibraryItem)
        this.editor = editor; // Asigna la editorial proporcionada
    }

    getEditor(){
        return this.editor;
    }

    SetEditor(editor : string): void{
        this.editor = editor;
    }
}

class User {
    private id: string = randomUUID();
    private name: string;
    private address : iAddress;
    private phoneNumber : string;

    public constructor(name: string, address: iAddress, phoneNumber: string){
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string{
        return this.name;
    }
    
    public setName(name : string): void{
        this.name = name;
    }

    public getAddress() : iAddress{
        return this.address;
    }

    public setAddress(address : iAddress):void{
        this.address = address;
    }
    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber : string):void{
        this.phoneNumber = phoneNumber;
    }

    
}


// Prestamos

class Loan{
    private id : string = randomUUID()
    private item : LibraryItem;
    private user : User;
    private loanDate : Date;
    private dueDate : Date;


    constructor(item : LibraryItem, user : User){
        this.item = item;
        this.user = user;
        this.loanDate = new Date();
        this.dueDate = new Date();
        this.dueDate.setDate(this.loanDate.getDate() + 7);
    }

    getId(): string{
        return this.id;
    }

    getItem(): LibraryItem {
        return this.item;
    }

    getUser() : User{
        return this.user
    } 

    getLoanDate(): Date {
        return this.loanDate;
    }

    getDueDate(): Date{
        return this.dueDate;
    }
}


class Library {
    private items: LibraryItem[];
    private user: User[];
    private loans : Loan[]


    constructor(){
        this.items = [];
        this.user = [];
        this.loans = [];
    }

    addItem(item: LibraryItem):void{
        this.items.push(item);
    }

    addUser(user : User): void{
        this.user.push(user)
    }

    loanItem(item:LibraryItem, user: User): void{
        //early return
        if(!this.isUserValid(user)){
            console.log("usuario no registrado");
            return;
        }
        const existingItem = this.findItem(item)
        if(!existingItem || !existingItem.checkAvailability){
            console.log("El item no esta disponible");
            return;
        }
        existingItem.markAsUnavailable();

        const loan = new Loan(existingItem, user);

        this.loans.push(loan)

        console.log(`${user.getName()} se llevo "${item.getTitle()}"
        Devolver el dia ${loan.getDueDate().toLocaleDateString}`);
        
    }

    private isUserValid(user: User): Boolean{
        return  this.user.includes(user)
    }

    private findItem(item: LibraryItem) : LibraryItem | undefined {
        return this.items.find((i) => i === item)
    }
}

const library = new Library();