/**
 * Created by Rich Hopkins on 3/8/2017.
 */
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "90%");
new RevealOnScroll($(".testimonial"), "60%");
