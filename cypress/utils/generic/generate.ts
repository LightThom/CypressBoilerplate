export class Generate {

    static randomOption<T>(array: T[]) : T | undefined {
        /**
         * Returns a random item in an array or undefined if array is empty. 
         * There's better ways to this but leaving this here for the POC
         */

        return array.length !== 0 ? array[Math.floor(Math.random() * array.length)] : undefined;
    } 
}