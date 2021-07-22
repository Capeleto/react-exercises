import React, { useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";

interface FormProps {
  id: string;
  emptyValidation?: Boolean;
}

interface FormikValues {
  name: string;
  hasCorn: Boolean;
  ingredients: string;
  type: string;
}

function CreateBeerFormik({ id, emptyValidation }: FormProps) {
  function handleSubmit(values: any, actions: any) {
    const { name, type, hasCorn, ingredients } = values;

    console.log(
      `Name: ${name} \nType: ${type} \nHas corn: ${hasCorn} \nIngredients: ${ingredients}`
    );

    actions.setSubmitting(false);
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      {({ errors, isSubmitting }: { errors: any; isSubmitting: boolean }) => (
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
      )}
    </Formik>
  );
}

export default CreateBeerFormik;
