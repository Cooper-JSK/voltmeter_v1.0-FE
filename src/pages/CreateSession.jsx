import CreateSessionForm from '../components/CreateSessionForm';

const Home = () => (
    <div className="container mx-auto p-8 max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 my-6">Create a New Session</h1>
        <div className="shadow-md rounded-lg mt-16">
            <CreateSessionForm />
        </div>
    </div>
);

export default Home;
