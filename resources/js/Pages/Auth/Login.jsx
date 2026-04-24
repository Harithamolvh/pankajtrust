import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Admin Log in" />

            <div className="mb-8">
                <h1 className="font-display font-black text-3xl text-charcoal mb-2">Welcome Back</h1>
                <p className="font-sans text-charcoal/60 text-sm">Please sign in to access the administrator dashboard.</p>
            </div>

            {status && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-sm font-sans font-medium text-green-700">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">
                <div>
                    <InputLabel htmlFor="email" value="Email Address" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-2 block w-full py-3"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="admin@pankajtrust.org"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <InputLabel htmlFor="password" value="Password" />
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="font-sans text-sm font-bold text-saffron hover:text-forest transition-colors focus:outline-none"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-2 block w-full py-3"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="••••••••"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block pt-2">
                    <label className="flex items-center group cursor-pointer w-max">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-3 font-sans text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                            Keep me signed in
                        </span>
                    </label>
                </div>

                <div className="pt-4">
                    <PrimaryButton className="w-full" disabled={processing}>
                        {processing ? 'Signing in...' : 'Sign In to Admin Portal'}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
