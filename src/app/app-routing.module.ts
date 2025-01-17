import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AboutmainComponent } from './eduman/about/aboutmain/aboutmain.component';
import { BlogmainComponent } from './eduman/blog/blogmain/blogmain.component';
import { BlogdetailsmainComponent } from './eduman/blogdetails/blogdetailsmain/blogdetailsmain.component';
import { CartmainComponent } from './eduman/cart/cartmain/cartmain.component';
import { CheckoutmainComponent } from './eduman/checkout/checkoutmain/checkoutmain.component';
import { ContactmainComponent } from './eduman/contact/contactmain/contactmain.component';
import { CoursefourmainComponent } from './eduman/course/coursefour/coursefourmain/coursefourmain.component';
import { CourseonemainComponent } from './eduman/course/courseone/courseonemain/courseonemain.component';
import { CoursethreemainComponent } from './eduman/course/coursethree/coursethreemain/coursethreemain.component';
import { CoursetwomainComponent } from './eduman/course/coursetwo/coursetwomain/coursetwomain.component';
import { CoursedetailsmainComponent } from './eduman/coursedetails/coursedetailsmain/coursedetailsmain.component';
import { ErrorpageComponent } from './eduman/errorpage/errorpage.component';
import { EventmainComponent } from './eduman/event/eventmain/eventmain.component';
import { EventdetailsmainComponent } from './eduman/eventdetails/eventdetailsmain/eventdetailsmain.component';
import { FaqdetailsmainComponent } from './eduman/faqdetails/faqdetailsmain/faqdetailsmain.component';
import { FaqmainComponent } from './eduman/faqpage/faqmain/faqmain.component';
import { HomeonemainComponent } from './eduman/homeone/homeonemain/homeonemain.component';
import { HomethreemainComponent } from './eduman/homethree/homethreemain/homethreemain.component';
import { HometwomainComponent } from './eduman/hometwo/hometwomain/hometwomain.component';
import { BecomeinstructormainComponent } from './eduman/instructor/becomeinstructor/becomeinstructormain/becomeinstructormain.component';
import { InstructormainComponent } from './eduman/instructor/instructormain/instructormain.component';
import { InstructorpromainComponent } from './eduman/instructor/instructorpromain/instructorpromain.component';
import { MembershipmainComponent } from './eduman/membership/membershipmain/membershipmain.component';
import { ShopmainComponent } from './eduman/shop/shopmain/shopmain.component';
import { ShopdetailsmainComponent } from './eduman/shopdetails/shopdetailsmain/shopdetailsmain.component';
import { WishlistmainComponent } from './eduman/wishlist/wishlistmain/wishlistmain.component';
import { ZoomclassdetailsmainComponent } from './eduman/zoom/zoomclassdetailsmain/zoomclassdetailsmain.component';
import { ZoomclassmainComponent } from './eduman/zoom/zoomclassmain/zoomclassmain.component';
import { WebinarmainComponent } from './eduman/webinar/webinarmain/webinarmain.component';
import { WebinardetailsmainComponent } from './eduman/webinardetails/webinardetailsmain/webinardetailsmain.component';
import { SigninmainComponent } from './eduman/signin/signinmain/signinmain.component';
import { SignupmainComponent } from './eduman/signup/signupmain/signupmain.component';
import { ForgotpasswordmainComponent } from './eduman/forgotpassword/forgotpasswordmain/forgotpasswordmain.component';
import { StudentprofilemainComponent } from './eduman/student/studentprofilemain/studentprofilemain.component';
import { ProgramdetailsComponent } from './eduman/programdetails/programdetails.component';
import { HalamandetailsComponent } from './eduman/halamandetails/halamandetails.component';
import { ProgrammainComponent } from './eduman/programmain/programmain.component';
import { TestimoniComponent } from './eduman/testimoni/testimoni.component';
import { TestimonidetailsComponent } from './eduman/testimonidetails/testimonidetails.component';
import { GallerydetailsComponent } from './eduman/gallerydetails/gallerydetails.component';
import { PengumumanComponent } from './eduman/pengumuman/pengumuman.component';
import { PengumumandetailsComponent } from './eduman/pengumumandetails/pengumumandetails.component';
import { AgendaComponent } from './eduman/agenda/agenda.component';
import { AgendadetailsComponent } from './eduman/agendadetails/agendadetails.component';
import { PrestasiComponent } from './eduman/prestasi/prestasi.component';
import { PrestasidetailsComponent } from './eduman/prestasidetails/prestasidetails.component';
import { DownloadComponent } from './eduman/download/download.component';
import { GalleryComponent } from './eduman/gallery/gallery.component';
import { TentangKamiComponent } from './eduman/tentang-kami/tentang-kami.component';


const routes: Routes = [
    { path: '', component: HometwomainComponent, pathMatch: 'full' },
    {
        path: 'home-1',
        component: HomeonemainComponent
    },
    {
        path: 'home',
        component: HometwomainComponent
    },
    {
        path: 'home-3',
        component: HomethreemainComponent
    },
    {
        path: 'course',
        component: CourseonemainComponent
    },
    {
        path: 'course-2',
        component: CoursetwomainComponent
    },
    {
        path: 'course-3',
        component: CoursethreemainComponent
    },
    {
        path: 'course-4',
        component: CoursefourmainComponent
    },
    {
        path: 'course-details',
        component: CoursedetailsmainComponent
    },
    {
        path: 'instructor',
        component: InstructormainComponent
    },
    {
        path: 'instructor-profile',
        component: InstructorpromainComponent
    },
    {
        path: 'student-profile',
        component: StudentprofilemainComponent
    },
    {
        path: 'become-instructor',
        component: BecomeinstructormainComponent
    },
    {
        path: 'shop',
        component: ShopmainComponent
    },
    {
        path: 'shop-details',
        component: ShopdetailsmainComponent
    },
    {
        path: 'wishlist',
        component: WishlistmainComponent
    },
    {
        path: 'cart',
        component: CartmainComponent
    },
    {
        path: 'checkout',
        component: CheckoutmainComponent
    },
    {
        path: 'event',
        component: EventmainComponent
    },
    {
        path: 'event-details',
        component: EventdetailsmainComponent
    },
    {
        path: 'halaman',
        component: HalamandetailsComponent
    },
    {
        path: 'berita',
        component: BlogmainComponent
    },
    {
        path: 'blog',
        component: BlogmainComponent
    },
    {
        path: 'blog-details',
        component: BlogdetailsmainComponent
    },
    {
        path: 'program',
        component: ProgrammainComponent
    },
    {
        path: 'program-details',
        component: ProgramdetailsComponent
    },
    {
        path: 'pengumuman',
        component: PengumumanComponent
    },
    {
        path: 'universitas',
        redirectTo: 'pengumuman',
        pathMatch: 'full'
    },
    {
        path: 'pengumuman-details',
        component: PengumumandetailsComponent
    },
    {
        path: 'agenda',
        component: AgendaComponent
    },
    {
        path: 'kegiatan',
        component: AgendaComponent
    },
    {
        path: 'agenda-details',
        component: AgendadetailsComponent
    },
    {
        path: 'testimoni',
        component: TestimoniComponent
    },
    {
        path: 'testimoni-details',
        component: TestimonidetailsComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'gallery-details',
        component: GallerydetailsComponent
    },
    {
        path: 'zoom-class',
        component: ZoomclassmainComponent
    },
    {
        path: 'zoom-class-detalis',
        component: ZoomclassdetailsmainComponent
    },
    {
        path: 'webinar',
        component: WebinarmainComponent
    },
    {
        path: 'webinar-details',
        component: WebinardetailsmainComponent
    },
    {
        path: 'about',
        component: AboutmainComponent
    },
    {
        path: 'membership',
        component: MembershipmainComponent
    },
    {
        path: '404-page',
        component: ErrorpageComponent
    },
    {
        path: 'contact',
        component: ContactmainComponent
    },
    {
        path: 'faq',
        component: FaqmainComponent
    },
    {
        path: 'faq-details',
        component: FaqdetailsmainComponent
    },
    {
        path: 'download',
        component: DownloadComponent
    },
    {
        path: 'prestasi',
        component: PrestasiComponent
    },
    {
        path: 'tingkat-nasional',
        component: PrestasiComponent
    },
    {
        path: 'prestasi-details',
        component: PrestasidetailsComponent
    },
    {
        path: 'tentang-kami',
        component: TentangKamiComponent
    },
    {
        path: 'signin',
        component: SigninmainComponent
    },
    {
        path: 'signup',
        component: SignupmainComponent
    },
    {
        path: 'forgot-password',
        component: ForgotpasswordmainComponent
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
