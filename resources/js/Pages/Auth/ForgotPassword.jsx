import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-8">
                <h1 className="font-display font-black text-3xl text-charcoal mb-2">Reset Password</h1>
                <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                    Forgot your password? No problem. Just let us know your email
                    address and we will email you a password reset link.
                </p>
            </div>

            {status && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-sm font-sans font-medium text-green-700">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="email" value="Email Address" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-2 block w-full py-3"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="admin@pankajtrust.org"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="pt-2">
                    <PrimaryButton className="w-full" disabled={processing}>
                        {processing ? 'Sending...' : 'Email Password Reset Link'}
                    </PrimaryButton>
                </div>
                
                <div className="text-center mt-4">
                    <Link href={route('login')} className="font-sans text-sm font-bold text-saffron hover:text-forest transition-colors">
                        Back to Login
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
