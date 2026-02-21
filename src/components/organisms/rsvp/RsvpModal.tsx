import {
  Fragment,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import bellinghamImage from "@assets/images/wedding/bellingham.webp";
import type { RootState } from "@/store/store";
import { closeRsvp } from "@/store/features/uiSlice";

type RsvpFormData = {
  name: string;
  email: string;
  attendance: "yes" | "no" | "maybe";
  guests: string;
  dietary: string;
  message: string;
};

const initialForm: RsvpFormData = {
  name: "",
  email: "",
  attendance: "yes",
  guests: "1",
  dietary: "",
  message: "",
};

export default function RsvpModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.isRsvpOpen);
  const [formData, setFormData] = useState<RsvpFormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialForm);
      setSubmitting(false);
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleClose = () => dispatch(closeRsvp());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
  };
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[200]" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/50 backdrop-blur-md transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-[200] w-screen overflow-y-auto">
          <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden sm:rounded-xl rounded-t-2xl bg-white text-left shadow-xl transition-all dark:bg-gray-900 w-full sm:my-8 sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] flex flex-col">
                <button
                  type="button"
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/80 dark:bg-gray-800/80 p-2 backdrop-blur-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  onClick={handleClose}
                >
                  <XMarkIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>

                <div className="flex flex-col-reverse sm:flex-row overflow-y-auto">
                  <div className="p-6 sm:w-1/2 sm:p-8 flex-shrink-0">
                    <div className="text-center sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl sm:text-3xl font-semibold leading-7 text-brand-500 dark:text-white"
                      >
                        Confirma tu asistencia
                      </Dialog.Title>
                      <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        Ayudanos a planear todo con carino. Completa el RSVP y
                        cuentanos si tienes alguna preferencia.
                      </p>
                    </div>

                    {submitted ? (
                      <div className="mt-8 rounded-xl bg-brand-50 px-4 py-6 text-center text-sm text-brand-900 dark:bg-white/10 dark:text-white">
                        Gracias por confirmar. Nos vemos en la celebracion.
                      </div>
                    ) : (
                      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <div>
                          <label
                            htmlFor="rsvp-name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Nombre completo
                          </label>
                          <input
                            id="rsvp-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="rsvp-email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Email
                          </label>
                          <input
                            id="rsvp-email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="rsvp-attendance"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                              Asistencia
                            </label>
                            <select
                              id="rsvp-attendance"
                              name="attendance"
                              value={formData.attendance}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
                            >
                              <option value="yes">Si, voy</option>
                              <option value="maybe">Tal vez</option>
                              <option value="no">No podre asistir</option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="rsvp-guests"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                              Numero de invitados
                            </label>
                            <input
                              id="rsvp-guests"
                              name="guests"
                              type="number"
                              min="1"
                              value={formData.guests}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="rsvp-dietary"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Alergias o dieta especial
                          </label>
                          <input
                            id="rsvp-dietary"
                            name="dietary"
                            type="text"
                            value={formData.dietary}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
                            placeholder="Vegetariano, sin gluten, etc."
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="rsvp-message"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Mensaje
                          </label>
                          <textarea
                            id="rsvp-message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
                            placeholder="Opcional"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="mt-2 inline-flex w-full justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:opacity-60 dark:bg-brand-500 dark:hover:bg-brand-400"
                        >
                          {submitting ? "Enviando..." : "Confirmar asistencia"}
                        </button>
                      </form>
                    )}
                  </div>

                  <div className="relative sm:w-1/2 flex-shrink-0">
                    <img
                      src={bellinghamImage}
                      alt="Bellingham Castle"
                      className="h-32 sm:h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-500/20 to-brand-600/20" />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
