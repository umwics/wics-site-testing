import { Grid } from "@material-ui/core";
import { FieldAttributes, Form, Formik, FormikConfig, FormikValues } from "formik";
import React from "react";

interface Field<T = any> {
    component: React.ComponentType<T>;
    props?: FieldAttributes<T> & { children?: React.ReactElement<any, any> };
}

interface DynamicFieldProps {
    field: Field;
}

interface DynamicFormCustomProps {
    className?: string;
    fields: Field[];
}

const DynamicField: React.FC<DynamicFieldProps> = ({ field }: DynamicFieldProps) => {
    const { component: Component, props } = field;

    return (
        <Grid item xs={12}>
            <Component {...props} />
        </Grid>
    );
};

const DynamicForm = <Values extends FormikValues = FormikValues, ExtraProps = unknown>(
    props: FormikConfig<Values> & DynamicFormCustomProps & ExtraProps
): JSX.Element => {
    const { className, fields } = props;

    return (
        <Formik {...props}>
            {_ => (
                <Form className={className}>
                    <Grid container spacing={2}>
                        {fields.map((field, idx) => (
                            <DynamicField key={idx} field={field} />
                        ))}
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default DynamicForm;
