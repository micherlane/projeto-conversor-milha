export class ConversorDadosNumber{
    public static converterDados(valor: string): number{
        try {
            const valorConvertido = Number(valor);
            return valorConvertido;
        } catch {
            return 0;
        }
    }
}