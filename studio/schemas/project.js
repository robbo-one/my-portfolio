export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
        name: "title",
        type: "string",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "location",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "bootcamp", title: "Bootcamp" },
],
            },
        },
      
        {
        name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    { 
        name:'link',
        type:'url',
    },
       {
            name: "tags",
            type: "array",
            of: [
                { 
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
}