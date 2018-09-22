---
background: 'Guadalest.jpg'
title: Contacto
form:
    name: my-nice-form
    fields:
        - name: name
          label: Nombre
          placeholder: Introduce tu nombre
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: Email
          placeholder: Introduce tu dirección de email
          type: text
          validate:
            rule: email
            required: true

        - name: message
          label: Mensaje
          size: long
          placeholder: Introduce tu mensaje
          type: textarea
          validate:
            required: true

    buttons:
        - type: submit
          value: Enviar »
          classes: btn

    process:
        - email:
            from: "{{ config.plugins.email.from }}"
            to:
              - "{{ config.plugins.email.from }}"
              - "{{ form.value.email }}"
            subject: "[Feedback] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: feedback-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Muchas gracias por contactarnos
        - display: thankyou
---

Contacta con nosotros si quieres conocernos. Vente a la granja y pasa un rato
con nosotros. 

Nos puedes pedir información sobre la miel, ya sea sobre el proceso de
producción o para compras a pequeña escala o al por mayor. 

Si tienes un proyecto de permacultura cerca del nuestro nos interesaría
conocerte e intercambiar opiniones.

Y si tienes alguna duda o quieres que escribamos sobre algún tema en concreto no
dudes en decirlo. 

Te responderemos lo antes posible. Muchas gracias.

