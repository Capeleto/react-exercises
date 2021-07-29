import React, { ChangeEventHandler } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Card, MenuItem, TextField, Select, Checkbox, Typography } from "@material-ui/core";

interface FormProps {
  id: string;
  emptyValidation?: boolean;
  useMaterial?: boolean;
}

interface FormikValues {
  name: string;
  hasCorn: boolean;
  ingredients: string;
  type: string;
}

function CreateBeerFormik({ id, emptyValidation, useMaterial }: FormProps) {
  function handleSubmit(values: any, actions?: any, setSubmitting?: any) {
    const { name, type, hasCorn, ingredients } = values;

    console.log(
      `Name: ${name} \nType: ${type} \nHas corn: ${hasCorn} \nIngredients: ${ingredients}`
    );

    actions?.setSubmitting(false);
    if (setSubmitting) {
      setSubmitting(false);
    }
  }

  const initialValues: FormikValues = {
    name: "",
    hasCorn: false,
    ingredients: "",
    type: "None Selected",
  };

  function validateForm({ name, ingredients, type }: FormikValues) {
    if (emptyValidation) {
      return {
        isButtonEnabled: name && ingredients && type !== "None Selected",
      };
    }

    return { isButtonEnabled: true };
  }

  function renderButtonSubmit(errors: any, isSubmitting: boolean, values: any, setSubmitting: any) {
    if (useMaterial) {
      return (
        <Button
          type="submit"
          onClick={() => handleSubmit(values, null, setSubmitting)}
          disabled={!errors.isButtonEnabled || isSubmitting}
        >
          Log Formik!
        </Button>
      );
    }

    return (
      <button
        type="submit"
        className="button small"
        disabled={!errors.isButtonEnabled || isSubmitting}
      >
        Log Formik!
      </button>
    );
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
      {({
        values,
        errors,
        isSubmitting,
        setSubmitting,
      }: {
        errors: any;
        isSubmitting: boolean;
        values: any;
        handleChange: ChangeEventHandler<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >;
        touched: any;
        setSubmitting: any;
      }) => {
        const buttonSubmit = renderButtonSubmit(errors, isSubmitting, values, setSubmitting);

        if (useMaterial) {
          return (
            <Card>
              <Form className="exercises-container wide">
                <Typography>Beer name:</Typography>
                <Field id="name" name="name" type="text" />
                <Typography>Beer Type:</Typography>
                <Field id="type" name="type" as={Select}>
                  <MenuItem value="None Selected">None Selected</MenuItem>
                  <MenuItem value="Beer 1">Beer 1</MenuItem>
                  <MenuItem value="Beer 2">Beer 2</MenuItem>
                  <MenuItem value="Beer 3">Beer 3</MenuItem>
                  <MenuItem value="Other Beer">Other Beer</MenuItem>
                </Field>
                <Typography>Has corn:</Typography>
                <Field id="hasCorn" name="hasCorn" type="checkbox" as={Checkbox} />
                <Typography>Ingredients:</Typography>
                <Field id="ingredients" as="textarea" name="ingredients" />
                {buttonSubmit}
              </Form>
            </Card>
          );
        }

        return (
          <Form className="exercises-container wide">
            Beer name:
            <Field id="name" name="name" type="text" />
            Beer Type:
            <Field id="type" name="type" as="select">
              <option value="None Selected">None Selected</option>
              <option value="Beer 1">Beer 1</option>
              <option value="Beer 2">Beer 2</option>
              <option value="Beer 3">Beer 3</option>
              <option value="Other Beer">Other Beer</option>
            </Field>
            Has corn:
            <Field id="hasCorn" name="hasCorn" type="checkbox" />
            Ingredients:
            <Field id="ingredients" as="textarea" name="ingredients" />
            <button
              type="submit"
              className="button small"
              disabled={!errors.isButtonEnabled || isSubmitting}
            >
              Log Formik!
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CreateBeerFormik;
