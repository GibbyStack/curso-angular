export class DestinoViaje {
    nombre: string;
    imageUrl: string;
    private selected: boolean;

    constructor(n: string, u: string){
        this.nombre = n;
        this.imageUrl = u;
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(s: boolean) {
        this.selected = s;
    }
}
