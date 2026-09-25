# projectHUB
Will update the description soon

# Stack? -> Most likely MERN (cause it is easy) 
    my-mern-app/
├── client/                      # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   └── ...
│   │   ├── pages/
│   │   ├── context/             # Context API (if used)
│   │   ├── redux/               # Redux (if used)
│   │   │   ├── slices/
│   │   │   └── store.js
│   │   ├── services/             # API calls (axios instances)
│   │   ├── hooks/                # custom hooks
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── server/                      # Node/Express backend
│   ├── config/
│   │   ├── db.js                # MongoDB connection
│   │   └── env.js
│   ├── controllers/
│   ├── models/                  # Mongoose schemas
│   ├── routes/
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── utils/
│   ├── validators/
│   ├── server.js  (or index.js/app.js)
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── .gitignore                   # root-level (node_modules, .env, build etc.)
├── README.md
└── package.json                 # (optional, if using workspaces/concurrently)