import * as rls from "readline-sync";

// Clase base para elementos de la biblioteca (libros y revistas)
class LibraryItem {
    title: string;
    year: number;
    isAvailable: boolean;

    // Constructor para crear un nuevo elemento de la biblioteca
    constructor(title: string, year: number) {
        this.title = title; // Asigna el título proporcionado
        this.year = year;   // Asigna el año proporcionado
        this.isAvailable = true; // Inicialmente, el elemento está disponible para préstamo
    }

    // Método para verificar la disponibilidad del elemento
    checkAvailability() {
        return this.isAvailable;
    }

    // Método para realizar un préstamo del elemento
    loanItem() {
        if (this.isAvailable) {
            this.isAvailable = false; // Marca el elemento como no disponible
            console.log(`Se te prestó el libro/revista: "${this.title}"`);
        } else {
            console.log(`"${this.title}" ya ha sido prestado.`);
        }
    }

    // Método para devolver un elemento de la biblioteca
    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true; // Marca el elemento como disponible
            console.log(`"${this.title}" ha sido devuelto.`);
        } else {
            console.log(`"${this.title}" no está prestado.`);
        }
    }
}

// Clase para representar libros (hereda de LibraryItem)
class Book extends LibraryItem {
    author: string;

    constructor(title: string, year: number, author: string) {
        super(title, year); // Llama al constructor de la clase base (LibraryItem)
        this.author = author; // Asigna el autor proporcionado
    }
}

// Clase para representar revistas (hereda de LibraryItem)
class Magazine extends LibraryItem {
    editor: string;

    constructor(title: string, year: number, editor: string) {
        super(title, year); // Llama al constructor de la clase base (LibraryItem)
        this.editor = editor; // Asigna la editorial proporcionada
    }
}

// Clase para representar usuarios de la biblioteca
class User {
    name: string;
    address: string;
    phoneNumber: number;

    constructor(name: string, address: string, phoneNumber: number) {
        this.name = name; // Asigna el nombre proporcionado
        this.address = address; // Asigna la dirección proporcionada
        this.phoneNumber = phoneNumber; // Asigna el número de teléfono proporcionado
    }

    // Método para realizar un préstamo de un elemento de la biblioteca
    loanLibraryItem(libraryItem: LibraryItem): void {
        if (libraryItem.checkAvailability()) {
            libraryItem.isAvailable = false; // Marca el elemento como no disponible
            console.log(`${this.name} ha tomado prestado "${libraryItem.title}".`);
        } else {
            console.log(`"${libraryItem.title}" no está disponible para préstamo.`);
        }
    }

    // Método para devolver un elemento de la biblioteca
    returnLibraryItem(libraryItem: LibraryItem): void {
        if (!libraryItem.checkAvailability()) {
            libraryItem.isAvailable = true; // Marca el elemento como disponible
            console.log(`${this.name} ha devuelto "${libraryItem.title}".`);
        } else {
            console.log(`"${libraryItem.title}" no se puede devolver porque no estaba prestado.`);
        }
    }
}

// Clase que representa un préstamo de un elemento de la biblioteca a un usuario
class Loan {
    isActive: boolean;
    libraryItem: LibraryItem;
    user: User;

    constructor(libraryItem: LibraryItem, user: User) {
        this.isActive = true;
        this.libraryItem = libraryItem;
        this.user = user;
    }
}

// Clase que representa la biblioteca y administra usuarios, elementos y préstamos
class Library {
    users: User[] = [];
    libraryItems: LibraryItem[] = [];
    loans: Loan[] = [];

    // Método para agregar un usuario a la biblioteca
    addUser(name: string, address: string, phoneNumber: number): void {
        const user = new User(name, address, phoneNumber);
        this.users.push(user);
    }

    // Método para agregar un elemento de la biblioteca (libro o revista)
    addLibraryItem(title: string, year: number, isBook: boolean, authorOrEditor: string): void {
        let libraryItem: LibraryItem;
        if (isBook) {
            libraryItem = new Book(title, year, authorOrEditor);
        } else {
            libraryItem = new Magazine(title, year, authorOrEditor);
        }
        this.libraryItems.push(libraryItem);
    }

    *// // Método para realizar un préstamo de un elemento de la biblioteca a un usuario
    loanItem(libraryItemId: number, userId: number): any{
        const libraryItem = this.libraryItems[libraryItemId];
        const user = this.users[userId];
        if (libraryItem && user) {
            if (libraryItem.checkAvailability()) {
                libraryItem.isAvailable = false; // Marca el elemento como no disponible
                const loan = new Loan(libraryItem, user);
                this.loans.push(loan);
                console.log(`${user.name} ha tomado prestado "${libraryItem.title}".`);
            } else {
                console.log(`"${libraryItem.title}" no está disponible para préstamo.`);
            }
        } else {
            console.log("El usuario o elemento de la biblioteca no existe.");
        }
    }

    // Método para devolver un elemento de la biblioteca que había sido prestado
    returnItem(loanId: number): void {
        const loan = this.loans[loanId];
        if (loan) {
            const { libraryItem, user } = loan;
            libraryItem.isAvailable = true; // Marca el elemento como disponible
            loan.isActive = false; // Marca el préstamo como inactivo
            console.log(`${user.name} ha devuelto "${libraryItem.title}".`);
        } else {
            console.log("El préstamo no existe.");
        }
    }

    // Método para mostrar los préstamos activos en la biblioteca
    showActiveLoans(): void {
        const activeLoans = this.loans.filter((loan) => loan.isActive);
        if (activeLoans.length > 0) {
            console.log("Préstamos activos:");
            activeLoans.forEach((loan, index) => {
                console.log(`${index}: ${loan.user.name} - "${loan.libraryItem.title}"`);
            });
        } else {
            console.log("No hay préstamos activos.");
        }
    }
} //*