import { useRouter } from 'next/navigation'
import { shippingAddressDefaultValues } from 'src/lib/constants'
import { shippingAddressSchema } from 'src/libs/validator'
import { ShippingAddress } from 'src/types'

// export default function ShippingAddressForm({
//   address,
// }: {
//   address: ShippingAddress | null
// }) {
//   const router = useRouter()

//   const form = useForm<z.infer<typeof shippingAddressSchema>>({
//     resolver: zodResolver(shippingAddressSchema),
//     defaultValues: address || shippingAddressDefaultValues,
//   })
//   const { toast } = useToast()

//   const [isPending, startTransition] = useTransition()
//   const onSubmit: SubmitHandler<z.infer<typeof shippingAddressSchema>> = async (
//     values
//   ) => {
//     startTransition(async () => {
//       const res = await updateUserAddress(values)
//       if (!res.success) {
//         toast({
//           variant: 'destructive',
//           description: res.message,
//         })
//         return
//       }
//       router.push('/payment-method')
//     })
//   }

//   return (
//     <>
//       <CheckoutSteps current={1} />
//       <div className="max-w-md mx-auto space-y-4">
//         <h1 className="h2-bold mt-4">Shipping Address</h1>
//         <p className="text-sm text-muted-foreground">
//           Please enter the address that you want to ship to
//         </p>
//         <Form {...form}>
//           <form
//             method="post"
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="space-y-4"
//           >
//             <div className="flex flex-col gap-5 md:flex-row">
//               <FormField
//                 control={form.control}
//                 name="fullName"
//                 render={({ field }: { field: any }) => (
//                   <FormItem className="w-full">
//                     <FormLabel>Full Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter full name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div>
//               <FormField
//                 control={form.control}
//                 name="streetAddress"
//                 render={({ field }: { field: any }) => (
//                   <FormItem className="w-full">
//                     <FormLabel>Address</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter address" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="flex flex-col gap-5 md:flex-row">
//               <FormField
//                 control={form.control}
//                 name="city"
//                 render={({ field }: { field: any }) => (
//                   <FormItem className="w-full">
//                     <FormLabel>City</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter city" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="country"
//                 render={({ field }: { field: any }) => (
//                   <FormItem className="w-full">
//                     <FormLabel>Country</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter country" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="postalCode"
//                 render={({ field }: { field: any }) => (
//                   <FormItem className="w-full">
//                     <FormLabel>Postal Code</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter postal code" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div className="flex gap-2">
//               <Button type="submit" disabled={isPending}>
//                 {isPending ? (
//                   <Loader className="animate-spin w-4 h-4" />
//                 ) : (
//                   <ArrowRight className="w-4 h-4" />
//                 )}
//                 Continue
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </>
//   )
// }