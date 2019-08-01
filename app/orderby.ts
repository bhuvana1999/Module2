import { PipeTransform, Pipe } from '@angular/core';
@Pipe({ name: "orderBy" })
export class OrderBy implements PipeTransform {
   
    transform(arr: any[], column: string, order: boolean) {
      
        if (column == undefined) {
            return arr;
        }

        let result: any[];
        if (order) {
            result = this.ascending(arr, column);
        } else {
            result = this.descending(arr, column);
        }
        return result;
    }

    ascending(arr: any[], column: string) {
        arr.sort((a: any, b: any) => {
            if (a[column] > b[column]) {
                return 1;
            }
            return -1;
        });
        return arr;
    }

    descending(arr: any[], column: string) {
        arr.sort((a: any, b: any) => {
            if (a[column] > b[column]) {
                return -1;
            }
            return 1;
        });
        return arr;
    }
}