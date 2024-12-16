console.warn('Le typage en TS')

//! Déclaration de variable
//! ***********************
//  nature nomVariable : type


//! Les types de données primitive
{
    // Nombre (Entier / Réel)
    const nb1: number = 42;
    const nb2 = 1_337;
    const nb3 = 3.14;
    const nb4 = 0x1AF;  // 0b0100_0100;
    let nb5: number;
    nb5 = 42;

    // Chaine de charactere
    const msg1: string = "Della Duck";
    let msg2: string;
    msg2 = `Hello ${msg1}`;

    // Booléen
    const test: boolean = true;

    // Collection
    const tab1: Array<string> = ['Riri', 'Fifi', 'Loulou'];
    const tab2: string[] = ['Donald', 'Daisy'];

    const matrice1: Array<Array<number>> = [
        [5, 1],
        [9, 3, 0],
        [1, 2, 3, 4, 5],
    ];
    const matrice2: number[][] = [
        [5, 1],
        [9, 3, 0],
        [1, 2, 3, 4, 5],
    ];

    // Collection - Avec un contenu restraint
    const tab3: [string] = ['Archibald'];
    const tab4: [number, number, number] = [42, 3, -5];
    const tab5: [string, ...string[]] = ['Riri', 'Zaza']

    // Tout type de donnée (A évité)
    let nawak: any;

    nawak = 42;
    console.log(typeof (nawak));  // Number
    nawak = 'Test';
    console.log(typeof (nawak));  // String
    nawak = null;
    console.log(typeof (nawak));  // Object
}

