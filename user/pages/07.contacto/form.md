---
background: 'Guadalest.jpg'
fullwidth: true
menu: Contacto
title: Contacto | Reserva aquí tu miel o núcleos para la siguiente temporada 
header: Contacto
body_classes: title_center
form:
    classes: 'contact-form'
    name: my-nice-form
    id: 'contact-form'
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
            subject: "[contacto] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: contact-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Muchas gracias por contactarnos
        - display: gracias
---



####Reserva aquí tu [miel](/productos/miel) o [núcleos de abejas](/productos/nucleos) para la primavera de 2019
  
Si tienes un proyecto de permacultura cerca del nuestro nos interesaría conocerte e intercambiar opiniones.

Y si tienes alguna duda o quieres que escribamos sobre algún tema en concreto no dudes en decirlo. 

Te responderemos lo antes posible. Muchas gracias.

