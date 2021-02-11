import StudentAddress from './studentAddress';

export default interface StudentBasic extends StudentAddress {
    // tslint:disable-next-line: variable-name
    student_name: string;
    email: string;
    mobile: number;
    DOB: Date;
    gender: string;
}
