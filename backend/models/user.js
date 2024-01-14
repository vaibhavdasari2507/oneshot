const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                // Password validation rules (adjust as needed)
                return /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(value);
            },
            message: 'Password must be at least 8 characters long and include both letters and numbers'
        }
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures uniqueness in the database
        trim: true,
        lowercase: true, // Ensures the email is stored in lowercase
        validate: {
            validator: function (value) {
                // Use a regular expression for basic email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: "Invalid email format",
        },
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
});

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

module.exports = mongoose.model("User", userSchema);