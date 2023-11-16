This is the client/user interface of the MERN stack note application developed from the ground up as a personal project.

Live WebApp
https://note-app-client-a1pt.onrender.com/notes

Project Title
Full Stack Note application client

Overview
Below is a quick refresh of how React/Redux works
![HowReduxWorks](https://github.com/Stephen-Afari/note_app_client/assets/62534292/fb57e1ea-fa3b-443a-9b71-ffd5a8dc7c73)

Below is a quick overview of what this application does:

This client side is built with React and Redux. It has a sign-in functionality integrated with a MongoDB backend. We have implemented React Router outlet to enable us to do routing. There are two routes: Dairy and Notes Routes. The Dairy route displays the form that enables us to input the title and body of our notes and an plus (+) icon that triggers an action to add the notes to an array which then gets displayed below the form input box (in the form of cards). Each card has a title, Message, the email address of the user who is logged in  (obtained from the backend Authentication details), the the current date and time, a delete icon (to enable us delete the card) and a plus icon (to enable us add the card details to the notes route through the Redux store and the backend - aided by createAsyncThunk functionality). The plus icon triggers an onClick event that dispatches two actions: 1. PostNoteData action: Which makes a POST request to the database along with the details of the card and a Jason web token(JWT) 2. GetNoteCollection action: Which makes a GET request to obtain all the data stored in the database.
In order to store data persistently and share it accross sessions, we connected the database to the Redux toolkit application, such that Redux actions make database requests to the Server to perform database operations using CreateAsyncThunk and the fetch library. We then handle the Server responses and update the Redux store. Thus, we dispatch actions to update the Redux store with data from the database and then from the store we populate the note route with all the data.
The note route pulls/collects all the data that has been added to the database via the Redux store.
Sign-in functionality: This is built using the useForm hook which enables us to input email and password and access the inputted data from the onSubmit Method. Inside this method, we dispatch a get LoggedInUser action which uses the inputted data to make a post request to the database. The returned data is used to update the Redux store enabling us to display them in the header and footer.

![LogIn](https://github.com/Stephen-Afari/note_app_client/assets/62534292/8aa1d0d0-74a4-4cd3-999d-a60aa45363cf)
![CreateNote](https://github.com/Stephen-Afari/note_app_client/assets/62534292/356a1989-48e4-438f-82d2-f26287b3723b)

Application Structure:
This fullStack application was built using the Model, View, Controller Architecture..This client side application represents the view part of it. The Model and Controller Section of the app will be discussed in the backend API project in this repository.
<img width="242" alt="Project Structure" src="https://github.com/Stephen-Afari/note_app_client/assets/62534292/7e8b4568-5f50-431b-8a53-bb393a75083f">




