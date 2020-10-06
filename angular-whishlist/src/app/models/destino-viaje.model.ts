export class DestinoViaje {
    nombre: string;
    imageUrl: string;
    private selected: boolean;
    public servicios: string[];

    constructor(n: string, u: string){
        this.nombre = n;
        this.imageUrl = u;
        this.servicios = ['pileta', 'desayuno'];
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(s: boolean) {
        this.selected = s;
    }
}
